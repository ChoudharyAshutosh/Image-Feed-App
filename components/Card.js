import {Image, StyleSheet, View, ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import AuthorRow from './AuthorRow'
export default function Card({fullname, image, linkText, onPressLinkText}){
    const [loading, setLoading]=useState(true)
    const handleLoad=()=>{
        setLoading(false)
    }
    return(
        <View>
            <AuthorRow fullname={fullname} linkText={linkText} onPressLinkText={onPressLinkText}/>
            <View style={styles.image}>
            {loading && (
                <ActivityIndicator style={StyleSheet.absoluteFill} size={"large"}/>
            )}
            <Image style={StyleSheet.absoluteFill} source={image} onLoad={handleLoad}/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    image:{
        aspectRatio:1,
        backgroundColor:'rgba(0,0,0,0.02)'
    }
})
Card.propTypes={
    fullname:PropTypes.string.isRequired,
    image:Image.propTypes.source.isRequired,
    linkText:PropTypes.string.isRequired,
    onPressLinkText:PropTypes.func
}
Card.defaultProps={
    linkText:'',
    onPressLinkText:()=>{}
}