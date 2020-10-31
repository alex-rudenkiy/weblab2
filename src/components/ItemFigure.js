import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme} from '@material-ui/core/styles';
import {Row, Container, Col} from 'react-bootstrap';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import FileSVG from "../assets/images/file.svg"

function SVGFileIcon(){
    return(`<svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        
        <path
          style="fill:#E2E5E7;"
          d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z"
          id="path2" /><path
          style="fill:#B0B7BD;"
          d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z"
          id="path4" /><polygon
          style="fill:#CAD1D8;"
          points="480,224 384,128 480,128 "
          id="polygon6" /><path
          style="fill:#84BD5A;"
          d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16  V416z"
          id="path8" /><path
          style="fill:#CAD1D8;"
          d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z"
          id="path18" /><g
          id="g20" /><g
          id="g22" /><g
          id="g24" /><g
          id="g26" /><g
          id="g28" /><g
          id="g30" /><g
          id="g32" /><g
          id="g34" /><g
          id="g36" /><g
          id="g38" /><g
          id="g40" /><g
          id="g42" /><g
          id="g44" /><g
          id="g46" /><g
          id="g48" /><text
          xml:space="preserve"
          style="font-style:normal;font-weight:normal;font-size:124.08971405px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.10224295"
          x="106.2049"
          y="378.17307"
          id="text59">
              
              <tspan

            id="tspan57"
            x="106.2049"
            y="378.17307"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Franklin Gothic Demi';-inkscape-font-specification:'Franklin Gothic Demi';fill:#ffffff;stroke-width:3.10224295">PNG</tspan></text>
     </svg>`);
}

export function ItemFigure(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [lastTimeClick, setLastTimeClick] = useState(Math.round(new Date() / 1000));

    return (
        <Figure onClick={()=>{

            setIsClicked(!isClicked);
        console.log(Math.abs(new Date()-lastTimeClick));
        if((new Date()-lastTimeClick)<300){
            alert("clicked");
        }

        setLastTimeClick(new Date());


        }} style={{width:"5em",
            paddingBottom: "5px",
            paddingTop: "0.5em",
            marginBottom: "15px",
            //marginLeft: "0.5em",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
            textAlign: "center",
            boxShadow: (isClicked)?"0 0 10px rgba(0,0,0,0.35)":"unset",
            borderRadius: "5px"
        }}>
            
            <Figure.Image
                width={50}
                height={50}
                src={FileSVG}
            />
            <Figure.Caption >
                <p style={{  textAlign: "center",
                    textDecoration: "none",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    margin: "unset"
                }}>{props.filename}</p>
            </Figure.Caption>
        </Figure>
    );
}

