import React from 'react'
import styles from './CreateAssignment.module.scss'
import Dice from '../../scripts/Dice'
import { useDispatch, useSelector } from 'react-redux'
import {DisplayForm, addAssignment, idRandom, setWarningForm} from '../../redux/assignment/assignmentSlice'
const CreateAssignment = ({value}: any) => {
    const {assignment}: any =  useSelector(state => state)
    const dispatch = useDispatch()
    const handleCreateAssignment = () => {
        const dice: boolean | any = Dice.addAssignmentAll() 
        if(dice === false) {
            dispatch(setWarningForm({warningForm: true}))
        }else{
            dispatch(setWarningForm({warningForm: false}))
            dispatch(DisplayForm({stateForm: false}))
            let data: Object= []
            data = {
                id: idRandom(),
                title: dice[0].value,
                body: dice[1].value,
                date: dice[2].value
            }
            const databaseString: any = window.localStorage.getItem("assignment")
            const databaseJSON = JSON.parse(databaseString);
            const newDatabase = [...databaseJSON, data]
            const newDatabaseString = JSON.stringify(newDatabase)
            window.localStorage.setItem('assignment', newDatabaseString)
            window.location.reload()
        }
    }
  return (
    <input type="button" value={value} onClick={handleCreateAssignment}/>
  )
}

export default CreateAssignment