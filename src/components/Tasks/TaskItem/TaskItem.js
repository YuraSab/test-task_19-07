import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./TaskItem.module.css";

const TaskItem = ({task}) => {

    const actualDate = new Date().toLocaleString().split(',')[0];

    return (
        <Link to={`/chosen-task/${task.id}`}>
            <div className={styles.main}>
                <div className={styles.title}>{task.title}</div>
                <div className={styles.description}>{task.description}</div>
                <div className={styles.dates}>
                    <div>
                        <div>{task.addDate}</div>
                        <label>Add date</label>
                    </div>
                    <div>
                        <div style={{color: task.dueDate >= actualDate ? "black" : "red"}}>{task.dueDate}</div>
                        <label>Due date</label>
                    </div>
                </div>
            </div>
        </Link>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object
};

export default TaskItem;