import React, {useState} from 'react';
import Axios from "axios";

function Album(props) {

    const [aphoto,setAPhoto]=useState('');
    const [a_name,setAName]=useState('');


    const fileUploadEvent = (e) => {
        //파일 갯수가 3개가 넘을경우 이벤트 종료
        if(e.target.files.length>3)
        {
            alert("어이 친구 파일은 3개까지가 최대야아!");
            return;
        }

        const upload = new FormData();
        for(let i = 0;i<e.target.files.length;i++)
        {
            upload.append("upload",e.target.files[i]);
        }
        console.log(upload)
        // 스프링 서버로 보낸 후 업로드된 파일명 리턴 받자
        Axios({
            method:'post',
            url:'/upload',
            data:upload,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setAPhoto(res.data);
        })
    }

    // submit 이벤트 발생 시 호출함수
    const onSubmitEvent = (e) => {

        //기본 이벤트를 무효화 ( action 호출을 막기 위해서 )
        e.preventDefault();
        if(aphoto.length===0)
        {
            alert("사진 업로드 안하냐잉?");
            return;
        }

        // 서버에 보내기
        Axios.post("/insert",{aphoto,a_name})
            .then(res=>{
                alert("지렸다");
            })
    }
    return (
        <div>
            <input type='file' id={'file'} multiple
                   onChange={fileUploadEvent}/>
            <form onSubmit={onSubmitEvent}>
                <input type={'text'}
                       onChange={(e)=>setAName(e.target.value)}/>
                <button type={'submit'}>내 마음속에 저장~</button>
            </form>
        </div>
    );
}

export default Album;