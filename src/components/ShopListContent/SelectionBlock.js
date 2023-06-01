import React from 'react';

function SelectionBlock({ title, selection }) {
  return (
    <div>
      <ul className="list-unstyled">
        <li className="py-2">
          <span className="fw-bold fs-5">{title}</span>
        </li>
        {selection &&
          selection.map((select) => (
            <li
              key={select.name}
              className="d-flex justify-content-between py-2 fs-5 pt-3"
            >
              <span>{select.name}</span>
              <span>(1)</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SelectionBlock;
