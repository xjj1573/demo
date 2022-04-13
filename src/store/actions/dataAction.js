export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const  fetDataBegin=()=>({
    type:"FETCH_DATA_BEGIN",
    
})
export const  fetDataSuccess=(data)=>({
    type:"FETCH_DATA_SUCCESS",
    payLoad:{data}
})
export const  fetDataFail=(error)=>({
    type:"FETCH_DATA_FAIL",
    payLoad:{error}
})

//thunk action
export function fetchData(){    
    return(dispatch,getState)=>{
        //请求前loading true
        dispatch(fetDataBegin())
        return fetch("https://mock.yonyoucloud.com/mock/2320/api/userInfo")
        .then(res=>res.json())
        .then(json=>{
            //请求成功loading false
            console.log('获取到的接口数据：',json)
            dispatch(fetDataSuccess(json))
            return json;
        }).catch(error=>{
            //捕获到错误loading false
            dispatch(fetDataFail(error))

        })
    }
}