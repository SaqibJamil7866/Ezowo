import { useEffect, useState } from 'react'
import ReactStickies from 'react-stickies';
import '@styles/react/apps/app-kanban.scss'
import { Row, Col, Card, Label, CardBody, CardTitle, CardHeader } from 'reactstrap'
import { getAllTaskStatus, getAllProjectTasks, getAllProjects } from "../../../services/Apis"

const StickyNotes = () => {
  
    const [boards, setBoards] = useState([])
    const [notes, setNotes] = useState([
        {
            color: "#E4FABC",
            contentEditable: true,
            degree: "50deg",
            id: "9160b522-a8b5-8345-9da4-d4f967dc86fd",
            text: "This is test notes",
            timeStamp: "Sep 17, 2023 7:32 PM",
            title: "2222",
            grid:{
                h: 2,
                i: "4085a0b5-8baf-a228-7d04-ec47d891e94b",
                isDraggable: undefined,
                isResizable: undefined,
                maxH: undefined,
                maxW: undefined,
                minH: undefined,
                minW: undefined,
                moved: false,
                static: false,
                w: 4,
                x: 0,
                y:Infinity
            },
        }
    ])
  
    const getBoards = () => {
        // getAllTaskStatus().then((res) => {
        //     const result = res.response
        //     if (
        //     result &&
        //     (result.code === 200 || result.code === 400) &&
        //     result.data
        //     ) {
        //     const boardData = result.data.map((item) => {
        //         return { ...item, id: item.value, realId: item.id }
        //     })
        //     setBoards(boardData)
        //     }
        // })
    }


    useEffect(() => {
        getBoards()
    }, [])

    const onChangeNotes = (notes) =>{
        setNotes(notes);
    }

    const onSaveNotes = (notes) =>{ // not working
        console.log("notes: ", notes)
    }


    return(
        <div className='app-kanban-wrapper'>
            <ReactStickies
                notes={notes}
                onChange={onChangeNotes}
                onSave={onSaveNotes}
            />
        </div>
    )
}

export default StickyNotes
