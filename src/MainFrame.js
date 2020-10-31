import React, { useState, useCallback, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { Row, Container, Col } from 'react-bootstrap';
import { TabPanel } from "./TabPanel";
import FullWidthTabs from "./TabPanel";
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import { FilesManagerTab } from "./components/FilesManagerTab";
import { GalleryTab } from "./components/GalleryTab";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { AudioTab } from "./components/AudioTab";
import { SearchTextBox } from "./components/SearchTextBox";
import SortIcon from '@material-ui/icons/Sort';
import FolderIcon from '@material-ui/icons/Folder';
import ImageIcon from '@material-ui/icons/Image';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FilterDramaTwoToneIcon from '@material-ui/icons/FilterDramaTwoTone';
import ReactDOMServer from 'react-dom/server';
import { Transition } from 'react-transition-group';
import { motion } from "framer-motion";
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import {SettingsTab} from "./components/SettingsTab"
//import Art from '/images/Summertime -  Kreayshawn feat. V-Nasty.jpg';
import * as fs from 'fs'
import {HeaderBar} from "./components/HeaderBar";


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

function showTags(url) {



    //const tags = NodeID3.read(url)
    //NodeID3.read(url, function(err, tags) {})




}


export function MainFrame() {
    const [bodyBlurred, setBodyBlurred] = useState(false);
    const [track, setTrack] = useState("");
    const [showPlayer, setShowPlayer] = useState(false);

    
    //const [bgImage, setBgImage] = useState(Art);

    const playerRef = useRef();

    useEffect(()=>{
        console.log(
        ReactDOMServer.renderToString(
            <Row>
                <Typography className={"mb-4"} variant="h6">
                    Все файлы
                </Typography>
                <div><SearchTextBox /></div>
                <div style={{
                    margin: "auto",
                    marginRight: "1em"
                }}><SortIcon /></div>
            </Row>
        )
        );
    },[]);

    const playFunc = (trackName) => {
        //const axios = require('axios');
        setTrack(`${process.env.PUBLIC_URL}/music/${trackName}`);
        playerRef.current.audio.current.play();
        showTags(`${process.env.PUBLIC_URL}/music/${trackName}`);
    }




    return (

        <div >
            {/* <div style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/Rip N Dip - Getter.jpg")`,     filter: "blur(40px)",
    width: "120%",
    height: "80%",
    backgroundSize: "cover",
    position: "absolute",
    zIndex: "0",
    marginLeft: "-10%"}}></div> */}




            <SettingsTab/>








            <header>

            </header>

            <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1508144322886-717c284ab392?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=533&fit=crop&ixid=eyJhcHBfaWQiOjF9)"}}>
                
            </div>


            <body style={{ height: "100vh"}} >


                <HeaderBar/>



                <Container className="h-100 d-inline-block" fluid className='mt-3'
                    style={{ paddingLeft: "2em", paddingRight: "2em", marginBottom: "5em" }}>


                    <FullWidthTabs style={{ maxHeight: "inherit" }} >
                        <div title="Мои файлы" icon={<FolderIcon />}>
                            
                            <Row>
                                <Typography className={"mb-4"} variant="h6">
                                    Все файлы
                                </Typography>
                                <div><SearchTextBox /></div>
                                <div style={{
                                    margin: "auto",
                                    marginRight: "1em"
                                }}><SortIcon /></div>
                            </Row>

                            <FilesManagerTab />
                        </div>

                        <div title="Галерея" icon={<ImageIcon />}>
                            <Typography className={"mb-4"} variant="h6">
                                Галерея
                            </Typography>
                            <GalleryTab />
                        </div>

                        <div title="Музыка" icon={<MusicNoteIcon />}>
                            <Typography className={"mb-4"} variant="h6">
                                Музыка
                        </Typography>
                            <AudioTab playMusicFunc={playFunc} />
                        </div>

                    </FullWidthTabs>

                </Container>


            </body>

            <footer className={"fixed-bottom"}>

            <motion.div
    //className="container"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}

  >
                <AudioPlayer style={{ background: "#e0e0e0d1", backdropFilter: "blur(2px)", width: "100%" }} src={track} ref={playerRef} />
</motion.div>
            </footer>

        </div>
    );
}

