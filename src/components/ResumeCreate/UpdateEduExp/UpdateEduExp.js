import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './UpdateEduExp.css'
import { DetailsContext } from '../../../contexts/DetailsContext'


function UpdateEduExp() {

    const { updateEducation, resume } = useContext(DetailsContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        updateEducation(data)
    };

    return (
        <div className="updateEduExp">
            <h1>Education and Experience</h1>
            <div className="eduExpFormContainer">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="educationForm">
                    <h3>Educational Details</h3>
                    <div className="educationFormContent">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Education #1</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Qualification" 
                                    {...register("degree1")} 
                                    name="degree1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.degree1}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Institute Name" 
                                    {...register("school1")} 
                                    name="school1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.school1}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Institute Location"
                                    {...register("edulocation1")} 
                                    name="edulocation1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.edulocation1}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Course Duration (Eg. 2022-2026)"
                                    {...register("edyear1")} 
                                    name="edyear1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.edyear1}
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Education #2</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Qualification" 
                                    {...register("degree2")} 
                                    name="degree2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.degree2}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Institute Name" 
                                    {...register("school2")} 
                                    name="school2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.school2}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Institute Location"
                                    {...register("edulocation2")} 
                                    name="edulocation2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.edulocation2}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Course Duration (Eg. 2022-2026)"
                                    {...register("edyear2")} 
                                    name="edyear2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.edyear2}
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Education #3</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Qualification" 
                                    {...register("degree3")} 
                                    name="degree3"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.degree3}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Institute Name" 
                                    {...register("school3")} 
                                    name="school3"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.school3}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Institute Location"
                                    {...register("edulocation3")} 
                                    name="edulocation3"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.edulocation3}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Course Duration (Eg. 2022-2026)"
                                    {...register("edyear3")} 
                                    name="edyear3"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.edyear3}
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Button type="submit">Save</Button>
                </form>

                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="experienceForm">
                    <h3>Experience</h3>
                    <div className="experienceFormContent">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Experience #1</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Job Title" 
                                    {...register("job1")} 
                                    name="job1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.job1}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Company Name" 
                                    {...register("company1")} 
                                    name="company1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.company1}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Company Location"
                                    {...register("explocation1")} 
                                    name="explocation1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.explocation1}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Job Duration (Eg. 2022-Present)"
                                    {...register("exyear1")} 
                                    name="exyear1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.exyear1}
                                />
                                <textarea 
                                    type="text" 
                                    placeholder="Enter About Your Job Description" 
                                    {...register("aboutjob1")} 
                                    name="aboutjob1"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee1"
                                    defaultValue={resume.education.aboutjob1}
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <h4>Experience #2</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Job Title" 
                                    {...register("job2")} 
                                    name="job2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.job2}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Company Name" 
                                    {...register("company2")} 
                                    name="company2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.company2}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Company Location"
                                    {...register("explocation2")} 
                                    name="explocation2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.explocation2}
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Job Duration (Eg. 2022-Present)"
                                    {...register("exyear2")} 
                                    name="exyear2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee"
                                    defaultValue={resume.education.exyear2}
                                />
                                <textarea 
                                    type="text" 
                                    placeholder="Enter About Your Job Description" 
                                    {...register("aboutjob2")} 
                                    name="aboutjob2"
                                    onChange={handleSubmit(onSubmit)}
                                    className="input_ee1"
                                    defaultValue={resume.education.aboutjob2}
                                />
                            </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Button type="submit">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateEduExp
