import React, { useRef, useState, useContext, useEffect } from 'react';
import { Button, Tooltip, Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helmet from 'react-helmet';

import { IoDocumentOutline } from "react-icons/io5";
import { FcPrevious, FcNext } from "react-icons/fc";

import { DetailsContext } from '../../contexts/DetailsContext';
import { ChooseTemplate, UpdateHeader, UpdateEduExp, SkillInterest, UpdateContact } from '../../components';

import './ResumeCreate.css';

// Reusable modal component
const InfoModal = ({ open, onClose, title, message, buttonText, onButtonClick }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogContent className="generate_popup">
            <DialogContentText>
                <div className="popupDiv">
                    <h3>{title}</h3>
                    <p>{message}</p>
                    {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
                </div>
            </DialogContentText>
        </DialogContent>
    </Dialog>
);

function ResumeCreate() {
    const { resume, clearResume } = useContext(DetailsContext);
    const template = resume.templateId;
    const sliderRef = useRef();
    const history = useHistory();

    const [slide, setSlide] = useState(1);
    const [openGenerateModal, setOpenGenerateModal] = useState(false);
    const [openMobileModal, setOpenMobileModal] = useState(false);
    const [counter, setCounter] = useState(3); // Set initial counter for 3 seconds
    const [timer, setTimer] = useState(false);
    const [cancel, setCancel] = useState(false);

    const handleClickOpenGenerate = () => {
        setOpenGenerateModal(true);
        setTimer(true);
    };

    const handleCloseGenerate = () => {
        setOpenGenerateModal(false);
    };

    const handleCloseMobile = () => {
        setOpenMobileModal(false);
    };

    const settings = {
        dots: false,
        adaptiveHeight: true,
        infinite: false,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        margin: 3,
        loop: true,
        autoplaySpeed: 8000,
        draggable: false,
        swipeToSlide: false,
        swipe: false,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
        setSlide(slide + 1);
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
        setSlide(slide - 1);
    };

    const generatePDF = () => {
        handleClickOpenGenerate();
        setOpenMobileModal(true);
    };

    // To clear localStorage
    const clearStoredData = () => {
        clearResume();
        setCancel(true);
        handleCloseGenerate();
    };

    useEffect(() => {
        if (timer) {
            const interval = setInterval(() => {
                setCounter(prev => prev - 1);
            }, 1000);

            // Automatically close modal and navigate after 3 seconds
            const timeout = setTimeout(() => {
                handleCloseGenerate();
                if (!cancel) {
                    history.push(`/template/${template}`);
                }
                setCancel(false);
                setCounter(3); // Reset counter for next time
            }, 3000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [timer, cancel, template, history]);

    const goToSlide = (sld) => {
        sliderRef.current.slickGoTo(sld);
        setSlide(sld + 1);
    };

    const shadow = '5px 5px 10px #000000ae, -5px -5px 10px #ddf0ed99';

    return (
        <div className="resumeCreate">
            <Helmet>
                <title>Resume Builder - Build Your Resume</title>
            </Helmet>
            <div className="resumeCreate_Container">
                <div className="resumeCreate_header">
                    <h1>Create Your Resume</h1>
                </div>

                {/* Stepper */}
                <div className="HrtStepper">
                    <Tooltip TransitionComponent={Zoom} title="Choose Templates">
                        <div onClick={() => goToSlide(0)} className="HrtStepperItem" style={{ background: slide >= 1 ? '#1090D9' : '#ECECEC', boxShadow: slide >= 1 ? `${shadow}` : 'none' }}>
                            <i className="fas fa-paper-plane"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="About You">
                        <div onClick={() => goToSlide(1)} className="HrtStepperItem" style={{ background: slide >= 2 ? '#1090D9' : '#ECECEC', boxShadow: slide >= 2 ? `${shadow}` : 'none' }}>
                            <i className="fas fa-user-tie"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Education and Experience">
                        <div onClick={() => goToSlide(2)} className="HrtStepperItem" style={{ background: slide >= 3 ? '#1090D9' : '#ECECEC', boxShadow: slide >= 3 ? `${shadow}` : 'none' }}>
                            <i className="fas fa-briefcase"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Skills and Interests">
                        <div onClick={() => goToSlide(3)} className="HrtStepperItem" style={{ background: slide >= 4 ? '#1090D9' : '#ECECEC', boxShadow: slide >= 4 ? `${shadow}` : 'none' }}>
                            <i className="fas fa-tools"></i>
                        </div>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title="Contact Details">
                        <div onClick={() => goToSlide(4)} className="HrtStepperItem" style={{ background: slide >= 5 ? '#1090D9' : '#ECECEC', boxShadow: slide >= 5 ? `${shadow}` : 'none' }}>
                            <i className="fas fa-phone-volume"></i>
                        </div>
                    </Tooltip>

                    <div className="HrtStepperBar">
                        <div className="HrtStepperBarProgress" style={{ width: `${(slide - 1) * 25}%` }}>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="resumeCreate_Body">
                    <div className="resumeSlider">
                        <Slider {...settings} ref={sliderRef}>
                            <div>
                                <ChooseTemplate />
                            </div>
                            <div>
                                <UpdateHeader />
                            </div>
                            <div>
                                <UpdateEduExp />
                            </div>
                            <div>
                                <SkillInterest />
                            </div>
                            <div>
                                <UpdateContact />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="resumeSlider_Buttons" style={{ justifyContent: slide === 1 ? 'flex-end' : 'space-between' }}>
                    <Button onClick={gotoPrev} style={{ display: slide === 1 ? 'none' : 'inline-block' }}>
                        <FcPrevious className="prevButton" />
                    </Button>
                    <Button onClick={gotoNext} style={{ display: slide === 5 ? 'none' : 'inline-block' }}>
                        <FcNext className="nextButton" />
                    </Button>

                    <Button onClick={generatePDF} className="generate_btn" style={{ display: slide === 5 ? 'inline-block' : 'none' }}>
                        <span className="generateText">Generate</span>
                        <IoDocumentOutline className="generate_pdf" />
                    </Button>
                </div>
            </div>

            {/* Generate PDF modal */}
            <InfoModal
                open={openGenerateModal}
                onClose={handleCloseGenerate}
                title={`Generating PDF in ${counter}...`}
                message="Mobile Users should press on the Open button and select the Download link option to download the PDF."
                buttonText="Do not save my data"
                onButtonClick={clearStoredData}
            />

            {/* Mobile download information modal */}
            <InfoModal
                open={openMobileModal}
                onClose={handleCloseMobile}
                title="Mobile Download Instructions"
                message="Mobile Users should press on the Open button and select the Download link option to download the PDF."
                buttonText="Okay"
                onButtonClick={handleCloseMobile}
            />
        </div>
    );
}

export default ResumeCreate;
