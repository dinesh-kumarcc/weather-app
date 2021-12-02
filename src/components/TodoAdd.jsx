import React, { Component } from "react";
import { auth, db } from "../firebase";
import { query, getDocs, collection, orderBy, deleteField, updateDoc, onSnapshot, addDoc, deleteDoc, doc, Timestamp } from "firebase/firestore";
import firebase from "firebase/compat";
import Navbar from './Navbar.jsx';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TodoAdd extends Component {
    constructor() {
        super();
        this.state = {
            note: '',
            show: false,
            updateNote: '',
            id: '',
            noteData: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.showUpdateField = this.showUpdateField.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const noteCol = query(collection(db, "note"), orderBy("name", "asc"));
        const noteSnapshot = await getDocs(noteCol);
        console.log('noteSnapshot', noteSnapshot);
        const notes = [];
        noteSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots 

            console.log(doc.id, " => ", doc.data());
            notes.push({
                ...doc.data(),
                id: doc.id
            })
        });
        // const noteList = noteSnapshot.docs.map(doc => doc.data());   
        this.setState({ noteData: notes })

    }

    // const stateChange = (event) =>{
    //     db.collection('todos').doc(props.task.id).update({title : task.title});
    //     setEdit(false);
    // }


    showUpdateField = (id) => {
        this.setState({ id: id })
        console.log(id, 'id for update')
        this.setState({ show: true });
    };


    updateField = () => {
        // console.log('hhhh'+this.state.id)
        const noteRef = doc(db, "note", this.state.id);
        // console.log(noteRef,'noteref')
        updateDoc(noteRef, {
            name: this.state.updateNote
        });
        this.getData();
        this.setState({ show: false });
    };



    async deleteNote(id) {
        const noteRef = doc(db, 'note',id);
        await deleteDoc(noteRef);
        this.getData();
    }

    addNote = e => {
        e.preventDefault();
        try {
            console.log('db', db);
            const docRef = addDoc(collection(db, "note"), {
                name: this.state.note,
                dateExample: Timestamp.fromDate(new Date("December 10, 1815"))
            });
            this.setState({ note: '' })
            // console.log(this.state.note, "Document written with ID: ", docRef.id);
            this.getData();

        } catch (e) {
            alert(e, 'error')
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { noteData } = this.state;
        console.log(noteData, '=')

        return (


            <div className="main-div">
                <Navbar />
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h4>Add Todo</h4>

                    <div className="container">
                        <form className="mt-2 py-2 px-2" autoComplete="off" onSubmit={this.addNote}>
                            <div className="form-group">
                                <input className="form-control" placeholder="add note here" name="note" type="text" onChange={this.handleChange} value={this.state.note}></input>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary rounded-pill px-5">Add</button>
                            </div>
                        </form>
                        <div>
                            {noteData ? (
                                <div>
                                    {
                                        noteData.map((doc) => {
                                            return (
                                                <div>
                                                    <h6>{doc.name},id:{doc.id}<span>
                                                        <button className="delete-icon">
                                                            <FontAwesomeIcon onClick={() => this.deleteNote(doc.id)} icon={faTrashAlt} /></button>
                                                    </span>

                                                       
                                                        <span>
                                                            <button className="delete-icon">
                                                            <FontAwesomeIcon onClick={() => this.showUpdateField(doc.id)} icon={faEdit} />
                                                            </button>
                                                        </span>

                                                        {this.state.show ? (
                                                            <div>
                                                                <input 
                                                                type="text" 
                                                                placeholder="edit note" 
                                                                hidden={this.state.id !== doc.id} 
                                                                defaultValue={doc.name}  
                                                                onChange={(e)=>this.setState({updateNote:e.target.value})} 
                                                                />
                                                                <span>
                                                                    <button className="btn btn-primary h-10" hidden={this.state.id !== doc.id} onClick={this.updateField}>save</button>
                                                                </span>
                                                            </div>
                                                        ) : null}
                                                    </h6>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : null}
                        </div>
                    </div>

                </div>
            </div>




            // <div>
            //     <h2>Note</h2>
            //     <input placeholder="add note" name="note" type="text" onChange={this.handleChange} value={this.state.note}></input>
            //     <button onClick={this.addNote}>Add</button>
            //     <div>
            //         <h5>Note List</h5>
            //         {noteData ? (
            //             <div>
            //                 {
            //                     noteData.map((doc) => {
            //                         return (
            //                             <div>
            //                                 <h6>{doc.name},id:{doc.id}<span> <button onClick={() => this.deleteNote(doc.id)}>delete</button> </span></h6>
            //                             </div>
            //                         )
            //                     })
            //                 }
            //             </div>
            //         ) : null}
            //     </div>
            // </div>

        )
    }
}
export default TodoAdd









