import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

class SidebarComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        }
    }
    render() {

        const { notes, classes, selectednoteIndex } = this.props;

        if (notes) {
            return (
                <div className={classes.sidebarContainer}>
                    <Button onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancelar' : 'Nova Nota'}</Button>
                    {
                        this.state.addingNote ?
                            <div>
                                <input type='text'
                                    className={classes.newNoteInput}
                                    placeholder="Digite o título"
                                    onKeyUp={e => this.updateTitle(e.target.value)}>
                                </input>
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}>Salvar Nota</Button>
                            </div> :
                            null
                    }
                    <List>
                        {
                            notes.map((_note, _index) => {
                                return (
                                    <div key={_index}>
                                        <SidebarItemComponent
                                            _note={_note}
                                            _index={_index}
                                            selectednoteIndex={selectednoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}>
                                        </SidebarItemComponent>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            )
        } else {
            return (<div></div>);
        }
    }

    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
        this.setState({ title: txt });
    }
    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }
    selectNote = (n, i) => {
        this.props.selectNote(n, i);
    }
    deleteNote = (note) => {
        this.props.deleteNote(note);
    }
}

export default withStyles(styles)(SidebarComponent);