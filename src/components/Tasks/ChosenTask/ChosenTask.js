import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styles from "./ChosenTask.module.css";
import DeleteBlackIcon from "../../../assets/icons/delete_black_icon.png";
import DoneIcon from "../../../assets/icons/done_black_icon.png";
import {onDeleteTask, onEditTask} from "../../../redux/action-creators";


const ChosenTask = () => {

    const [chosenTask, setChosenTask] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();
    const {tasks} = useSelector(({tasks: {tasks}}) => ({tasks}));
    const dispatch = useDispatch();

    useEffect(() => {
        const findTask = tasks.find(task => task.id === Number(id));
        if (!findTask) {
            navigate("/tasks");
        } else {
            setChosenTask(findTask);
            setTitle(findTask.title);
            setDescription(findTask.description);
            setDate(findTask.dueDate);
        }
    }, [id, tasks]);

    const handleSetCompleted = () => {
        dispatch(onEditTask({
            id: chosenTask.id,
            title: chosenTask.title,
            description: chosenTask.description,
            completed: !chosenTask.completed,
            addDate: chosenTask.addDate,
            dueDate: chosenTask.dueDate,
        }));
    };

    const handleDelete = () => {
        dispatch(onDeleteTask(chosenTask.id));
        navigate('/tasks');
    };

    const handleEdit = () => {
        if (title && description) {
            dispatch(onEditTask({
                id: chosenTask.id,
                title: title,
                description: description,
                completed: chosenTask.completed,
                addDate: chosenTask.addDate,
                dueDate: date,
            }));
            alert("Changes saved!");
        } else {
            alert("Please fill all fields!");
        }
    };

    if (chosenTask)

        return (
            <div className={styles.main}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label>Title</label>
                    <textarea
                        rows={5}
                        className={styles.titleArea}
                        placeholder={chosenTask.title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Description</label>
                    <textarea
                        rows={5}
                        placeholder={chosenTask.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label>Due date</label>
                    <input
                        className={styles.inputDate}
                        type={"date"}
                        value={date}
                        onChange={(event) => setDate(event.target.value.toLocaleString().split('-').reverse().join('.'))}
                    />
                </div>
                <div className={styles.changesActions}>
                    <label>Complete</label>
                    <div className={styles.completed} onClick={() => handleSetCompleted()}>
                        {chosenTask.completed && <img src={DoneIcon} alt={"done"}/>}
                    </div>
                    <label>Delete</label>
                    <div className={styles.deleted} onClick={() => handleDelete()}>
                        <img src={DeleteBlackIcon} alt={"delete"} width={44}/>
                    </div>
                    <button onClick={() => handleEdit()}>Save changes</button>
                </div>
            </div>
        );
};

export default ChosenTask;