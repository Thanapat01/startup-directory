export default function Modal(props) {
  return (
    <div>
      <label htmlFor={props.name} className="btn btn-sm btn-secondary">
        {props.name}
      </label>

      <input type="checkbox" id={props.name} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {props.name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor={props.name} className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
