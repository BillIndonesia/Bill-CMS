const Loading = () => { return { type : "LOADING-REQ" } }

const Success = () => { return { type : "REQ-SUCCESS"} }

const Failure = () => { return { type : "REQ-FAILURE" } }

const ResetReq = () => { return { type : "RESET-REQ" } }

const FinishReq = () => { return { type : "FINISH-REQ" } }


export {Loading , Success , Failure , ResetReq , FinishReq} 