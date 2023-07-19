import React from 'react';
import styles from "./TaskItem.module.css";

const TaskItem = ({task}) => {


    console.log(task.dueDate)

    return (
        <div className={styles.main}>
            <div className={styles.title}>{task.title}</div>
            <div className={styles.description}>{task.description}</div>
            <div className={styles.dates}>
                <div>
                    <div>{task.addDate}</div>
                    <label>Add date</label>
                </div>
                <div>
                    <div>{task.dueDate}</div>
                    <label>Due date</label>
                </div>
            </div>

        </div>
    );
};

export default TaskItem;