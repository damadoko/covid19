import React from "react";
import classes from "./Prevention.module.css";

const Prevention = () => {
  return (
    <div className={classes.Prevention}>
      <h2>
        <span>5</span> <span>actions</span> to protect yourself
      </h2>
      <ul>
        <li>
          Wash your hands frequently.<span>1</span>
        </li>
        <li>
          Maintain social distancing at least 1 metre (3 feets).<span>2</span>
        </li>
        <li>
          Avoid touching eyes, nose and mouth.<span>3</span>
        </li>
        <li>
          Practice respiratory hygiene.<span>4</span>
        </li>
        <li>
          If you have <span>Fever, cough and difficulty breathing</span> , seek
          medical care early.<span>5</span>
        </li>
      </ul>
    </div>
  );
};

export default Prevention;
