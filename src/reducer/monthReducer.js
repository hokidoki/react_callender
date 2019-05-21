export const PREV_MONTH = "PREV_MONTH";
export const NEXT_MONTH = "NEXT_MONTH";

export const nextMonth = () =>{
    return{
        type : NEXT_MONTH
    }
    
}

export const prevMonth = () =>{
    return {
        type : PREV_MONTH
    }
}


export function createInitialState(){
    const date = new Date("","",0);
    const get_day = new Date("","",1);
    date.setFullYear(new Date().getFullYear());
    date.setMonth(new Date().getMonth());
    get_day.setFullYear(new Date().getFullYear());
    get_day.setMonth(new Date().getMonth());
    return {
        yy : date.getFullYear(),
        mm : date.getMonth()+1,
        firstday : 1,
        lastdate : date.getDate(),
        first_get_day : get_day.getDay()
    }
}

function buildNextMonth(yy,mm){
    let year, month;
    if(mm===12){
        year = yy+1;
        month = 1;
    }else{
        year = yy;
        month = mm +1;
    }
    const next_month_callender = new Date(year,month,0);
    const next_month_get_day = new Date(year,month-1,1);
    console.log(next_month_get_day)
    return {
        yy : year,
        mm : month,
        firstday : 1,
        lastdate : next_month_callender.getDate(),
        first_get_day : next_month_get_day.getDay()
    }
}

function buildPrevMonth(yy,mm){
    let year, month;
    if(mm===1){
        year = yy -1;
        month = 12;
    }else{
        year = yy;
        month = mm - 1;
    }
    const prev_month_callender = new Date(year,month,0);
    const prev_month_get_day = new Date(year,month-1,1);
    console.log(prev_month_get_day);
    return {
        yy : year,
        mm : month,
        firstday : 1,
        lastdate : prev_month_callender.getDate(),
        first_get_day : prev_month_get_day.getDay()
    }
}



export const monthReducer = (state = createInitialState(), action)=>{
    switch(action.type){
        case PREV_MONTH : 
            return Object.assign({},state,buildPrevMonth(state.yy,state.mm))
        case NEXT_MONTH :
            return Object.assign({},state,buildNextMonth(state.yy,state.mm))
        default :
            return state;
    }
}