import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font} from '@react-pdf/renderer';
// import robotoBold from '../../assets/fonts/Roboto-Bold.ttf'
import robotoMedium from '../../assets/fonts/Roboto-Medium.ttf'
import robotoRegular from '../../assets/fonts/Roboto-Regular.ttf'


import Gmail from '../../assets/images/png/gmail.png'
import Call from '../../assets/images/png/phone.png'
import Linkedin from '../../assets/images/png/linkedin.png'
import Location from '../../assets/images/png/location.png'
import Calender from '../../assets/images/png/calender.png'


const dot = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0u3SG3YOE-27Hfd6vXRD9bI9EXJOLLB5i6S9Mypd2g&s";

// Create styles
Font.register({ family: "'Roboto', sans-serif", src: robotoMedium });
Font.register({ family: "'RobotoRegular', sans-serif", src: robotoRegular });


function Template1({ resume }) {
    
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            fontFamily: "'Roboto', sans-serif",
            // backgroundColor: resume.theme.primary,
        },
        SectionHeading: {
            fontSize: '18px',
            color: '#3e0097',
            textTransform: 'uppercase',
        },
        HZLine: {
            height: '2px',
            backgroundColor: '#3e0097',
            marginBottom: '10px'
        },
        DottedLine: {
            margin: '10px 0px',
            borderBottom: '1.5px dashed #d1d1d1',
            width: '98%'
        },
        header: {
            justifyContent: 'space-between',
            padding: '20px 35px',
            display: 'flex',
            flexDirection: 'row',
            // backgroundColor: resume.theme.secondary,
        },
        avatar : {
            width: '70px',
            height: '70px',
            borderRadius: '100%'
        },
        icon: {
            width: '10px',
            height: '10px',
            color: '#3e0097',
            marginRight: '1px'
        },
        icon1:    {
            padding:'10px',
            // marginRight:'500px'
        },
        headerRight: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            overflow: 'hidden',
        },
        name: {
            fontSize: 25,
            textTransform: 'uppercase',
        },
        title: {
            fontSize: 13,
            color: '#3e0097',
        },
        details: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        details1: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '15px'
        },
        contactItem: {
            fontSize: '9px',
            // fontFamily: "'Nunito', sans-serif",
            marginRight: '20px'
        },
        bio: {
            margin: '0px 35px 15px 35px',
        },
        bioText: {
            fontSize: 10,
            color: '#666666',
        },
        educationContainer: {
            margin: '0px 35px 5px 35px'
            // margin: '0px 35px 15px 35px',
        },
        education: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        aboutjobdetails: {
            display: 'flex',
            fontSize: 10,
            color: '#666666',
        },
        eduLeftCont: {
            fontSize: 13,
        },
        eduLeftTitle: {
            fontSize: 10,
            color: '#3e0097',
            // fontFamily: "'RobotoRegular', sans-serif",
        },
        eduRight: {
            display: 'flex',
            flexDirection: 'row',
        },
        edulocation: {
            marginTop: 2,
            fontSize: 10,
            color: '#666666',
        },
        eduYear: {
            // marginLeft: 10,
            marginTop: 2,
            fontSize: 10,
            color: '#666666',
        },
        skillContainer: {
            margin: '0px 35px 15px 35px',
        },
        skillItem: {
            display: 'flex',
            flexDirection: 'row'
        },
        skill: {
            fontSize: 10,
            marginRight: '5px',
        }
    });


    return (
        <Document>
            <Page size="A4" style={styles.page} title="resume">
                <View style={styles.header}>
                    <View style={styles.headerRight}>
                        <Text style={styles.name}>{resume.header.name}</Text>
                        <Text style={styles.title}>{resume.header.title}</Text>
                        <View style={styles.details}>
                            {resume.contact.email ? (
                                <View style={styles.details}>
                                    <Image src={Gmail} style={styles.icon} />
                                    <Text style={styles.contactItem}>{resume.contact.email}</Text>
                                </View>
                            ) : (<></>)}

                            {resume.contact.phone ? (
                                <View style={styles.details}>
                                    <Image src={Call} style={styles.icon} />
                                    <Text style={styles.contactItem}>{resume.contact.phone}</Text>
                                </View>
                            ) : (<></>)}

                            {resume.contact.website ? (
                                <View style={styles.details}>
                                    <Image src={Location} style={styles.icon} />
                                    <Text style={styles.contactItem}>{resume.contact.website}</Text>
                                </View>
                            ) : (<></>)}

                            {resume.contact.address ? (
                                <View style={styles.details}>
                                    <Image src={Linkedin} style={styles.icon} />
                                    <Text style={styles.contactItem}>{resume.contact.address}</Text>
                                </View>
                            ) : (<></>)}
                        </View>
                    </View>

                    {resume.image ? (
                        <Image src={resume.image} style={styles.avatar}/>
                    ) : (
                        <></>
                    )}
                </View> 
            
                <View style={styles.bio}>
                    {resume.header.bio ? (
                        <>
                            <Text style={styles.SectionHeading}>Summary</Text>
                            <Text style={styles.HZLine}/>
                            <Text style={styles.bioText}>{resume.header.bio}</Text>
                        </>
                    ) : (<></>)}
                </View>

                <View style={styles.educationContainer}>
                    {resume.education.company1 ? (
                        <>
                            <Text style={styles.SectionHeading}>Experience</Text>
                            <Text style={styles.HZLine}/>
                        </>
                    ) : (<></>)}

                    {resume.education.company1 ? (
                        <>
                            <View style={styles.education}>
                                <View style={styles.eduLeft}>
                                    <Text style={styles.eduLeftCont}>{resume.education.job1}</Text>
                                    <Text style={styles.eduLeftTitle}>{resume.education.company1}</Text>
                                </View>
                                <View style={styles.eduRight}>
                                    <View style={styles.details1}>
                                        <Image src={Location} style={styles.icon} />
                                        <Text style={styles.edulocation}>{resume.education.explocation1}</Text>
                                    </View>
                                    <View style={styles.details1}>
                                        <Image src={Calender} style={styles.icon} />
                                        <Text style={styles.eduYear}>{resume.education.exyear1}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.aboutjobdetails}>{resume.education.aboutjob1}</Text>
                            <Text style={styles.DottedLine}/>
                        </>
                    ) : (<></>)}

                    {resume.education.company2 ? (
                        <>
                            <View style={styles.education}>
                                <View style={styles.eduLeft}>
                                    <Text style={styles.eduLeftCont}>{resume.education.job2}</Text>
                                    <Text style={styles.eduLeftTitle}>{resume.education.company2}</Text>
                                </View>
                                <View style={styles.eduRight}>
                                    <View style={styles.details1}>
                                        <Image src={Location} style={styles.icon} />
                                        <Text style={styles.edulocation}>{resume.education.explocation2}</Text>
                                    </View>
                                    <View style={styles.details1}>
                                        <Image src={Calender} style={styles.icon} />
                                        <Text style={styles.eduYear}>{resume.education.exyear2}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.aboutjobdetails}>{resume.education.aboutjob2}</Text>
                            <Text style={styles.DottedLine}/>
                        </>
                    ) : (<></>)}
                    
                </View>
                
                <View style={styles.educationContainer}>
                    {resume.education.school1 ? (
                        <>
                            <Text style={styles.SectionHeading}>Education</Text>
                            <Text style={styles.HZLine}/>
                        </>
                    ) : (<></>)}

                    {resume.education.school1 ? (
                        <>
                            <View style={styles.education}>
                                <View style={styles.eduLeft}>
                                    <Text style={styles.eduLeftCont}>{resume.education.degree1}</Text>
                                    <Text style={styles.eduLeftTitle}>{resume.education.school1}</Text>
                                </View>
                                <View style={styles.eduRight}>
                                    <View style={styles.details1}>
                                        <Image src={Location} style={styles.icon} />
                                        <Text style={styles.edulocation}>{resume.education.edulocation1}</Text>
                                    </View>
                                    <View style={styles.details1}>
                                        <Image src={Calender} style={styles.icon} />
                                        <Text style={styles.eduYear}>{resume.education.edyear1}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.DottedLine}/>
                        </>
                    ) : <></>}

                    {resume.education.school2 ? (
                        <>
                            <View style={styles.education}>
                                <View style={styles.eduLeft}>
                                    <Text style={styles.eduLeftCont}>{resume.education.degree2}</Text>
                                    <Text style={styles.eduLeftTitle}>{resume.education.school2}</Text>
                                </View>
                                <View style={styles.eduRight}>
                                    <View style={styles.details1}>
                                        <Image src={Location} style={styles.icon} />
                                        <Text style={styles.edulocation}>{resume.education.edulocation2}</Text>
                                    </View>
                                    <View style={styles.details1}>
                                        <Image src={Calender} style={styles.icon} />
                                        <Text style={styles.eduYear}>{resume.education.edyear2}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.DottedLine}/>
                        </>
                    ) : <></>}

                    {resume.education.school3 ? (
                        <>
                            <View style={styles.education}>
                                <View style={styles.eduLeft}>
                                    <Text style={styles.eduLeftCont}>{resume.education.degree3}</Text>
                                    <Text style={styles.eduLeftTitle}>{resume.education.school3}</Text>
                                </View>
                                <View style={styles.eduRight}>
                                    <View style={styles.details1}>
                                        <Image src={Location} style={styles.icon} />
                                        <Text style={styles.edulocation}>{resume.education.edulocation3}</Text>
                                    </View>
                                    <View style={styles.details1}>
                                        <Image src={Calender} style={styles.icon} />
                                        <Text style={styles.eduYear}>{resume.education.edyear3}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.DottedLine}/>
                        </>
                    ) : <></>}
                </View>

                <View style={styles.skillContainer}>
                    {resume.skills.skill1 ? (
                        <>
                            <Text style={styles.SectionHeading}>Skills</Text>
                            <Text style={styles.HZLine}/>
                        </>
                    ) : (<></>)}

                    <View style={styles.skillItem}>
                        {resume.skills.skill1 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.skills.skill1}</Text>
                        ) : (<></>)}

                        {resume.skills.skill2 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.skills.skill2}</Text>
                        ) : (<></>)}

                        {resume.skills.skill3 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.skills.skill3}</Text>
                        ) : (<></>)}

                        {resume.skills.skill4 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.skills.skill4}</Text>
                        ) : (<></>)}

                        {resume.skills.skill5 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.skills.skill5}</Text>
                        ) : (<></>)}
                        
                        {resume.skills.skill6 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.skills.skill6}</Text>
                        ) : (<></>)}

                        {resume.skills.skill7 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.skills.skill7}</Text>
                        ) : (<></>)}
                    </View>
                </View>

                <View style={styles.skillContainer}>
                    {resume.interests.interest1 ? (
                        <>
                            <Text style={styles.SectionHeading}>Interests</Text>
                            <Text style={styles.HZLine}/>
                        </>
                    ) : (<></>)}
                    
                    <View style={styles.skillItem}>
                        {resume.interests.interest1 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.interests.interest1}</Text>
                        ) : (<></>)}
                        {resume.interests.interest2 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.interests.interest2}</Text>
                        ) : (<></>)}
                        {resume.interests.interest3 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.interests.interest3}</Text>
                        ) : (<></>)}
                        {resume.interests.interest4 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.interests.interest4}</Text>
                        ) : (<></>)}
                        {resume.interests.interest5 ? (
                            <Text style={styles.skill}><Image src={dot} style={styles.icon1} />{resume.interests.interest5}</Text>
                        ) : (<></>)}
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Template1
