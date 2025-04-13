import React, { useEffect, useRef, useState } from 'react';
import uniqid from 'uniqid';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { assets } from '../../LMS_assets/assets/assets';

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState('');
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingLectureIndex, setEditingLectureIndex] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  });

  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter chapter title:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(chapters.map((chapter) =>
        chapter.chapterId === chapterId ? { ...chapter, collapsed: !chapter.collapsed } : chapter
      ));
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setLectureDetails({
        lectureTitle: '',
        lectureDuration: '',
        lectureUrl: '',
        isPreviewFree: false,
      });
      setIsEditing(false);
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === 'edit') {
      const lectureToEdit = chapters.find(ch => ch.chapterId === chapterId).chapterContent[lectureIndex];
      setLectureDetails(lectureToEdit);
      setIsEditing(true);
      setEditingLectureIndex(lectureIndex);
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === 'remove') {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter;
        })
      );
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Enter course description...',
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseDescription = quillRef.current?.root.innerHTML;

    const formData = {
      title: courseTitle,
      price: coursePrice,
      discount,
      image,
      description: courseDescription,
      chapters,
    };

    console.log('Submitted Course:', formData);
    alert("Course submitted! Check console for output.");

    // TODO: Replace console log with actual API submission
  };

  return (
    <div className='h-screen overflow-y-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0 bg-gray-50'>
      <form className='flex flex-col gap-6 max-w-2xl w-full text-gray-700 bg-white shadow-lg p-6 rounded-xl transition-all duration-300'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-2'>Create a New Course</h1>
  
        <div className='flex flex-col gap-1'>
          <p className='font-medium'>Course Title</p>
          <input 
            onChange={e => setCourseTitle(e.target.value)} 
            value={courseTitle} 
            type="text" 
            placeholder='Enter course title' 
            className='transition-all outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400 focus:ring-2 ring-blue-300' 
            required 
          />
        </div>
  
        <div className='flex flex-col gap-1'>
          <p className='font-medium'>Course Description</p>
          <div ref={editorRef} className='bg-gray-100 p-3 rounded shadow-inner min-h-[100px] transition-all duration-300'></div>
        </div>
  
        <div className='flex items-start justify-between flex-wrap gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='font-medium'>Course Price</p>
            <input 
              onChange={e => setCoursePrice(e.target.value)} 
              value={coursePrice} 
              type="number" 
              placeholder='0' 
              className='transition-all outline-none md:py-2.5 py-2 px-3 rounded border border-gray-400 focus:ring-2 ring-blue-300' 
              required 
            />
          </div>
  
          <div className='flex flex-col gap-1'>
            <p className='font-medium'>Course Thumbnail</p>
            <label htmlFor='thumbnailImage' className='flex items-center gap-3 cursor-pointer group'>
              <img 
                src={assets.file_upload_icon} 
                alt="upload" 
                className='p-3 bg-blue-500 rounded shadow group-hover:scale-110 transition-transform duration-300' 
              />
              <input 
                type="file" 
                id='thumbnailImage' 
                onChange={e => setImage(e.target.files[0])} 
                accept="image/*" 
                hidden 
              />
              {image && <img className='max-h-10 rounded' src={URL.createObjectURL(image)} alt="preview" />}
            </label>
          </div>
        </div>
  
        <div className='flex flex-col gap-1'>
          <p className='font-medium'>Discount %</p>
          <input 
            onChange={e => setDiscount(e.target.value)} 
            value={discount} 
            type="number" 
            placeholder='0' 
            min={0} 
            max={100} 
            className='transition-all outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-400 focus:ring-2 ring-blue-300' 
            required 
          />
        </div>
  
        <div>
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className='bg-white border rounded-lg shadow mb-4 transition-all'>
              <div className='flex justify-between items-center p-4 border-b bg-gray-100'>
                <div className='flex items-center'>
                  <img
                    src={assets.dropdown_icon}
                    width={14}
                    alt=""
                    className={`mr-2 cursor-pointer transition-transform duration-300 ${chapter.collapsed && "rotate-90"}`}
                    onClick={() => handleChapter('toggle', chapter.chapterId)}
                  />
                  <span className='font-semibold text-gray-700'>{chapterIndex + 1}. {chapter.chapterTitle}</span>
                </div>
                <span className='text-sm text-gray-500'>{chapter.chapterContent.length} Lectures</span>
                <img 
                  src={assets.cross_icon} 
                  alt="delete" 
                  className='cursor-pointer hover:scale-110 transition-transform' 
                  onClick={() => handleChapter('remove', chapter.chapterId)} 
                />
              </div>
  
              {!chapter.collapsed && (
                <div className='p-4'>
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div key={lectureIndex} className='flex items-center justify-between mb-2 text-sm'>
                      <span>
                        {lectureIndex + 1}. {lecture.lectureTitle} - {lecture.lectureDuration} mins - 
                        <a href={lecture.lectureUrl} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline ml-1 hover:text-blue-700'>Link</a> - 
                        {lecture.isPreviewFree ? " Free" : " Paid"}
                      </span>
                      <div className='flex items-center gap-2'>
                        <img src={assets.edit_icon} alt='Edit' className='cursor-pointer w-4 hover:scale-110' onClick={() => handleLecture('edit', chapter.chapterId, lectureIndex)} />
                        <img src={assets.cross_icon} alt='Delete' className='cursor-pointer w-4 hover:scale-110' onClick={() => handleLecture('remove', chapter.chapterId, lectureIndex)} />
                      </div>
                    </div>
                  ))}
                  <div className='inline-flex bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded hover:bg-blue-200 cursor-pointer transition-colors' onClick={() => handleLecture('add', chapter.chapterId)}>
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className='flex justify-center items-center bg-green-100 text-green-700 font-semibold p-2 rounded-lg cursor-pointer mt-4 hover:bg-green-200 transition-colors' onClick={() => handleChapter('add')}>
            + Add Chapter
          </div>
        </div>
  
        <button type="submit" className="mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 shadow-md">Submit Course</button>
      </form>
  
      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-6 rounded-lg text-gray-700 w-full max-w-md shadow-xl animate-fadeIn'>
            <h2 className='text-xl font-semibold mb-4'>{isEditing ? 'Edit Lecture' : 'Add Lecture'}</h2>
  
            <div className='mb-3'>
              <p>Lecture Title</p>
              <input type='text' className='mt-1 block w-full border rounded py-2 px-3' value={lectureDetails.lectureTitle} onChange={(e) => setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })} />
            </div>
  
            <div className='mb-3'>
              <p>Duration (Minutes)</p>
              <input type='number' className='mt-1 block w-full border rounded py-2 px-3' value={lectureDetails.lectureDuration} onChange={(e) => setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })} />
            </div>
  
            <div className='mb-3'>
              <p>Lecture URL</p>
              <input type='text' className='mt-1 block w-full border rounded py-2 px-3' value={lectureDetails.lectureUrl} onChange={(e) => setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })} />
            </div>
  
            <div className='flex gap-3 items-center mb-5'>
              <p>Is Preview Free?</p>
              <input type='checkbox' className='scale-125' checked={lectureDetails.isPreviewFree} onChange={(e) => setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })} />
            </div>
  
            <button
              type='button'
              className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
              onClick={() => {
                if (isEditing) {
                  setChapters(prev =>
                    prev.map(chapter => {
                      if (chapter.chapterId === currentChapterId) {
                        const updatedContent = [...chapter.chapterContent];
                        updatedContent[editingLectureIndex] = lectureDetails;
                        return { ...chapter, chapterContent: updatedContent };
                      }
                      return chapter;
                    })
                  );
                } else {
                  setChapters(prev =>
                    prev.map(chapter => {
                      if (chapter.chapterId === currentChapterId) {
                        return {
                          ...chapter,
                          chapterContent: [...chapter.chapterContent, lectureDetails],
                        };
                      }
                      return chapter;
                    })
                  );
                }
                setShowPopup(false);
              }}
            >
              {isEditing ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default AddCourse;
