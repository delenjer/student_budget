
export const Modal = ({ children, title, handle }) => (
  <div className="modal">
    <div className="modal__body">
      <div className="modal__header">
        <div className="modal__title">{ title }</div>

        <button
          type="button"
          className="modal__close"
          onClick={() => handle(false)}
        />
      </div>

      {children}
    </div>
  </div>
);
