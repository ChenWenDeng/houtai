import { getUrl, getUrl2 } from '@/config/';
import  { fetch } from '@/service/ajaxWrap';
// import store from '@/store/index';
// import  storage from '@/utils/storage'

// import {
//     SET_BLOODLIST,
//     SET_BLOOD_FINISHED

// } from './../mutation-types'
// import { push_uniq } from '_terser@3.17.0@terser';
// import { start } from 'pretty-error';

const state = {
    dataList:[],
    // typeName: '',

    // loading:false,
    // finished: false,
    // error: false,

    // phoneNumber: '',

    // isLoading: false,
}

const mutations = {
    // [SET_BLOODLIST] (state, val) {
    //     state.dataList = val;
    // },
    // [SET_BLOOD_FINISHED] (state, val) {
    //     state.finished = val;
    // }
}

const actions = {

    loadData: function ({commit, dispatch, state, rootState}, data = {}) {

        let url,
        // count = state.dataList.length;
        mobile = '15608029630';
        // limit =  count + ",20";


        switch(state.typeName){
            case 'xy': 
                url = getUrl('get_oxygen') 
                break;
            case 'tw': 
                url = getUrl('get_degrees') 
                break;
            case 'bs': 
                url = getUrl('get_step') 
                break;
            case 'xl': 
                url = getUrl('get_heart') 
                break;
            case 'loc':
                url = getUrl('get_loc') 
                break
            default:
                return false;
        }

        let params = {
            mobile: mobile,
            // limit: limit
        }
            fetch({
                commit, 
                dispatch, 
                params, 
                method: 'post',
                url: url,
                before() {
                    // state.loading = true;
                },
                success({ res, commit, dispatch }) {
                    if (res.code != 1 ) {
                        // state.error = true;
    
                        return false;
                    }
                    if(res.data && res.data.length > 0){
                        // state.dataList = state.dataList.concat(res.data);
                        state.dataList =res.data
                    }
                    // res.data.length < 20 && commit('SET_BLOOD_FINISHED', true);
                },
                error ({ err, commit, dispatch }){
    
                },
                after () {
                    // state.loading = false;
                    // state.phoneNum = storage.localGet('phoneNumber')
                }
            })
    },
    loadType: function({commit, dispatch, state, rootState}, typeName){
        state.typeName = typeName;
    },
    reload: function({commit, dispatch, state, rootState}) {
        // state.dataList=[];
        state.typeName='';
    
        // state.loading=false;
        // state.finished= false;
        // state.error= false;
    
        // state.phoneNumber= ''
    }
}

const getters = {
    typeName(state) {
        return state.typeName;
    },
    dataList(state){
        return state.dataList
    },
    // loading(state){
    //     return state.loading
    // },
    // finished(state){
    //     return state.finished
    // },
    // error(state){
    //     return state.error
    // }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}



