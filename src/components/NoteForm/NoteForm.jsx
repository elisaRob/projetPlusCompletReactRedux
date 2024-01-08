import s from "./style.module.css";
import { PencilFill, Trash, TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { BoutonPrimary } from "components/BoutonPrimary/BoutonPrimary";
import { Validators as ValidatorsServices } from "services/form-validators";
import { FielError } from "components/FieldError/FieldError";

export function NoteForm({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickTrash,
  onSubmit,
}) {
  const [formValues, setFormValues] = useState({ 
    title: note?.title || "" , 
    content: note?.content || ""
  });
  const [formErros, setFormErros] = useState({
    title: note?.title ? undefined : "",
    content: note?.content ? undefined : ""
  });

  function validate(titleOuContent, valueDuMessage) {
    setFormErros({
      ...formErros,
      [titleOuContent]: VALIDATORS[titleOuContent](valueDuMessage),
    });
  }

  function updateFormValues(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  }

  function hasError() {
    return Object.values(formErros).some((error) => error !== undefined);
  }

  const VALIDATORS = {
    title: (value) => {
      return (
        ValidatorsServices.min(value, 3) || ValidatorsServices.max(value, 20)
      );
    },
    content: (value) => {
      return ValidatorsServices.min(value, 3);
    },
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickTrash && (
          <TrashFill onClick={onClickTrash} className={s.icon} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
        value={formValues.title}
      />
      <FielError msg={formErros.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
        value={formValues.content}
      />
      <FielError msg={formErros.content} />
    </div>
  );

  const submitButton = (
    <div className={s.submit_btn}>
      <BoutonPrimary
        isDisabled={hasError()}
        onClick={() => onSubmit(formValues)}
      >
        Submit
      </BoutonPrimary>
    </div>
  );

  return (
    <form className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">
        {isEditable ? contentInput : <pre>{note.content}</pre>}
      </div>
      {onSubmit && submitButton}
    </form>
  );
}
