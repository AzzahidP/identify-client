import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import styles from './index.module.css'
import Loader from '../../component/loader';
import { ArrowBackIosNew, Verified } from '@mui/icons-material';

const FaceRecog = () => {
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: 300,
        height: 400,
        facingMode: 'user'
    };
    const [name, setName] = useState('');
    const [isLoading, setLoading] = useState(false);

    const capture =React.useCallback(
        () => {
            setLoading(true)
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(`imageSrc=${imageSrc}`)
            axios.post(`https://getprediction3-lpkxsgezjq-et.a.run.app/predict`, {data: imageSrc})
                .then((res) => {
                    console.log(`response=${res}`)
                    setName(res.data)
                    console.log(name)
                })
                .catch(error => {
                    console.log(`error=${error}`)
                }).finally(() => {
                    setLoading(false)
                })
        },
        [webcamRef]
    );
    
    let content;
    if (name=='' && isLoading==false){
        content = 
        <div className={styles.main}>
            <div className={styles.webcam_container}>
                <Webcam
                audio={false}
                height={300}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                width={350}
                videoConstraints={videoConstraints}
                mirrored={true}
                className='rounded-lg'
                    /> 
            </div>
            <div className={styles.button_container}>
                <button className={styles.camera_button} onClick={capture}>Capture</button>
            </div>
        </div>
    } else if (name=='' && isLoading==true){
        content =
        <div className={styles.main}>
            <Loader/>
        </div>
    } else if (name!='' && isLoading==false){
        content = 
        <div className={styles.main}>
            <div className={styles.result_container}>
                <img 
                    src={`data:image/jpeg;base64,${name['ImageBytes']}`}
                />
            </div>
            <div className='flex flex-col justify-center align-middle items-center'>
                <div className='w-full h-auto my-10 flex justify-center align-middle'><Verified color='white' className={styles.verified_icon}/></div>
                <h2 className='text-white text-4xl '>Verified</h2>
            </div>
        </div>
    }

    return(
       <div className='w-screen h-screen p-0 m-0 bg-black'>
            <div className='flex flex-row bg-opacity-5 bg-slate-200 h-16'>
                <a href='/' className='flex pb-1 pt-5 pl-4'><ArrowBackIosNew className={styles.arrowback_icon}/></a>
                <h1 className={styles.title}>
                    IDentify
                </h1>
            </div>
        {content}
       </div>
    );
}

export default FaceRecog;