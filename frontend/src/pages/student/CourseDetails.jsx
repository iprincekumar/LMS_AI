import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import { assets } from '../../LMS_assets/assets/assets';
import humanizeDuration from 'humanize-duration';
import Footer from '../../components/student/Footer';
import { video } from 'framer-motion/client';
import YouTube from 'react-youtube';

const CourseDetails = () => {

    const { id } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [openSections, setOpenSections] = useState({});
    const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
    const [playerData, setPlayerData] = useState(null);



    const { allCourses, calculateRating, calculateLectures, calculateChapterTime, calculateCourseDuration, currency } = useContext(AppContext);

    const fetchCourseData = async () => {
        const findCourse = allCourses.find(course => course._id === id);
        setCourseData(findCourse);
    }

    useEffect(() => {
      const getData = async () => {  // ✅ Correct async function inside useEffect
          await fetchCourseData(); 
      };
      getData();  // ✅ Call the function
  }, [allCourses]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

    return courseData ? (
        <> {/* ✅ Wrapped everything in a React Fragment */}
            <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
                <div className='absolute top-0 left-0 w-full -z-1 bg-gradient-to-b from-cyan-100/70'></div>

                {/* 🟡 Left Column */}
                <div className='max-w-xl z-10 text-gray-500'>
                    <h1 className='md:text-4xl text-2xl font-semibold text-gray-800'>{courseData?.courseTitle}</h1>
                    <p className='pt-4 md:text-base text-sm'
                        dangerouslySetInnerHTML={{ __html: courseData?.courseDescription?.slice(0, 200) || "" }}>
                    </p>

                    {/* ⭐ Review and Rating Section */}
                    <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
                        <p>{calculateRating(courseData)}</p>
                        <div className='flex'>
                            {[...Array(5)].map((_, i) => (
                                <img key={i} 
                                    src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} 
                                    alt=" " 
                                    className='w-3.5 h-3.5' />
                            ))}
                        </div>
                        <p className='text-blue-500'>
                            ({courseData?.courseRatings?.length || 0} {courseData?.courseRatings?.length > 1 ? 'Ratings' : 'Rating'})
                        </p>
                        <p>
                            {courseData?.enrolledStudents?.length || 0} 
                            {courseData?.enrolledStudents?.length > 1 ? ' Students enrolled' : ' Student enrolled'}
                        </p>
                    </div>
                    <p className='text-sm'>Course by <span>{courseData?.educator?.name || "Unknown Educator"}</span></p>
                    <div className='pt-8 text-gray-800'>
                            <h2 className='text-xl font-semibold'>Course Structure</h2>
                            <div className='pt-5'>
                                {courseData.courseContent.map((chapter,index)=>(
                                    <div key={index} className='border border-gray-300 mb-2 rounded'>
                                        <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={()=>toggleSection(index)}>
                                            <div className='flex items-center gap-2'>
                                                <img className={`transform transition-transform ${openSections[index] ? 'rotate-180' : 'rotate-0'}`} src={assets.down_arrow_icon} alt="arrow icon"/>
                                                <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                                            </div>
                                            <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures-{calculateChapterTime(chapter)}</p>
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-96' : 'max-h-0'}`}>
                                            <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                                                {chapter.chapterContent.map((lecture, i)=>(
                                                    <li key={i} className='flex items-start gap-2 py-1'>
                                                        <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1'/>
                                                        <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                                                            <p>{lecture.lectureTitle}</p>
                                                            <div className='flex gap-2'>
                                                                {lecture.isPreviewFree && <p onClick={() => setPlayerData({
                                                                    videoId: lecture.lectureUrl.split('/').pop()
                                                                })} 
                                                                className='text-blue-500 cursor-pointer'>Preview</p>}
                                                                <p>{humanizeDuration(lecture.lectureDuration* 60*1000,{units: ['h', 'm']})}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    </div>

                    <div className='py-20 text-sm md:text-default'>
                        <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
                        <p className='pt-3 rich-text'
                        dangerouslySetInnerHTML={{ __html: courseData?.courseDescription}}>
                    </p>
                    </div>
                </div>

                {/* 🟢 Right Column */}
                <div className='w-full md:w-1/3 z-10 text-gray-500 shadow-2xl '>

                {
                    playerData ? 
                    <YouTube videoId={playerData.videoId} opts={{playerVars: {autoplay: 1}}} iframeClassName='w-full aspect-video'/>
                    : <img src={courseData?.courseThumbnail} alt="Course Thumbnail" className='w-full h-full object-cover' />
                }

                    <div className='pt-4 pb-4 px-3 py-3 bg-white shadow border border-gray-200'>
                        <div className='flex items-center gap-2'>

                                <img src={assets.time_left_clock_icon} alt="video(preview)"/>
                                <p className='text-red-500'><span className='font-medium'>5 days </span>left at this price!!</p>
                        </div>


                        <div className='flex items-center gap-2 pt-3'>
                                <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
                                <p className='md:text-lg text-gray-500 line-through'>{currency}{courseData.coursePrice}</p>
                                <p className='md:text-1xl text-xl font-semibold text-green-500'>You save {courseData.discount}% on this course</p>
                        </div>

                        <div className='flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>
                                <div className='flex items-center gap-2'>
                                    <img src={assets.star} alt="star icon" className='w-4 h-4'/>
                                    <p>{calculateRating(courseData)}</p>
                                </div>
                                <div className='h-4 w-px bg-gray-500/40'></div>

                                <div className='flex items-center gap-2'>
                                    <img src={assets.time_clock_icon} alt="clock icon" className='flex items-center gap-1'/>
                                    <p>{calculateCourseDuration(courseData)}</p>
                                </div>
                                <div className='h-4 w-px bg-gray-500/40'></div>
                                <div className='flex items-center gap-2'>
                                <img src={assets.lesson_icon} alt="clock icon" className='flex items-center gap-1'/>
                                <p>{calculateLectures(courseData)} lecture</p>
                                </div>
                        </div>
                        <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium'>{isAlreadyEnrolled ? 'Continue Learning' : 'Enroll Now'}</button>

                        <div>
                            <p className='font-semibold text-gray-800 pt-4'>What's in this course?</p>
                            <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                                <li>Learn from the best instructors</li>
                                <li>Learn at your own pace</li>
                                <li>Access on mobile and desktop</li>
                                <li>Free lifetime access</li>
                                <li>24/7 support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    ) : <Loading />;
}

export default CourseDetails;