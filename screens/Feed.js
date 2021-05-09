import {ActivityIndicator, Text, ViewPropTypes, SafeAreaView} from 'react-native'
import PropTypes from 'prop-types'
import React,{useState, useEffect} from 'react'
import {fetchImages} from '../utils/api'
import CardList from '../components/CardList'
export default function Feed({style, commentsForItem, onPressComments}){
    const [loading, setLoading]=useState(true)
    const [error, setEror]=useState(false)
    const [items, setItems]=useState([])
    useEffect(()=>{
        (async()=>{
        try{
            const items= await fetchImages();
            setLoading(false)
            setItems(items)
        }catch(e){
            setLoading(false)
            setEror(true)
        }
        })()
    },[])
    if(loading)
        return <ActivityIndicator size='large'/>
    if(error)
        return <Text>Error...</Text>
    return(
        <SafeAreaView style={style}>
            <CardList items={items} commentsForItem={commentsForItem} onPressComments={onPressComments}/>
        </SafeAreaView>
    )
}
Feed.propTypes={
    style:ViewPropTypes.style,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments: PropTypes.func.isRequired,
}
Feed.defaultProps={
    style:null
}