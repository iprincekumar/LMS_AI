import {createContext, use, useEffect, useState} from "react";
import { dummyCourses } from "../LMS_assets/assets/assets";
import { all } from "axios";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration"
import { set } from "mongoose";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{


    const currency = import.meta.env.VITE_CURRENCY
    const navigate= useNavigate()

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])



    //fecth all courses
    const fetchAllCourses= async ()=>{
        setAllCourses(dummyCourses)
    }

    //function to calculate average rating of course
    const calculateRating = (course) => {
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating=>{
            totalRating += rating.rating
        })
        return totalRating/course.courseRatings.length
    }

    //calculate chapter time
    const calculateChapterTime = (chapter) => {
        let time=0;
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time* 60*1000,{units: ['h', 'm']})
    }

    //duration of the course(each chapter)
    const calculateCourseDuration = (course) => {
        let time=0;
        course.courseContent.map((chapter)=> chapter.chapterContent.map((lecture) => time += lecture.lectureDuration))
        return humanizeDuration(time* 60*1000,{units: ['h', 'm']})
    }
    

    // function to calculate no. of lectures in the course
    const calculateLectures = (course) => {
        let lectures=0;
        course.courseContent.forEach((chapter)=> {
            if (Array.isArray(chapter.chapterContent)) {
                lectures += chapter.chapterContent.length;
            }
        });
        return lectures;
    }

    //fetch user enrolled courses
    const fetchUserEnrolledCourses= async ()=>{
        setEnrolledCourses(dummyCourses)
    }
    
    useEffect(()=>{
        fetchAllCourses()
        fetchUserEnrolledCourses()
    },[])
    const value ={
            currency, allCourses, navigate, calculateRating, isEducator, setIsEducator, calculateLectures, calculateChapterTime, calculateCourseDuration,enrolledCourses, setEnrolledCourses, fetchUserEnrolledCourses
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}