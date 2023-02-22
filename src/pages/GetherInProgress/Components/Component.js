// @app
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Dimensions,
    Text,
    View,
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { styles } from '../styles';
import Button from '../../../components/Button';
import Colors from '../../../styles/Colors';
export const Counter = ({ title, points, setVal }) => {
    return (
        <View style={styles.counterContainer}>
            <Text style={[styles.counterText, { fontSize: RFPercentage(2) }]}>{title}</Text>
            <Text style={styles.counterText}>{points}</Text>
            <View style={styles.counterIconsContainer}>
                <Button
                    callBack={() => points > 0 && setVal(points - 1)}
                    title={<AntDesign name='minus' size={RFPercentage(2)} />}
                    titleStyle={styles.counterText}
                    customStyle={styles.minusIcons} />
                <Button
                    callBack={() => points < 99 && setVal(points + 1)}
                    title={<AntDesign name='plus' size={RFPercentage(2)} />}
                    titleStyle={styles.counterText}
                    customStyle={styles.plusIcon(1)} />
            </View>
        </View>
    )
}
export const CounterFooter = ({ callBack, remainingTimeProp }) => {


    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(remainingTimeProp);
    console.log(remainingTimeProp, 'remainingTimePropremainingTimePropremainingTimeProp')

    useEffect(() => {
        let intervalId;
        if (isRunning && remainingTime > 0) {
            intervalId = setInterval(() => {
                setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
            }, 1000);
        } else if (remainingTime === 0) {
            setIsRunning(false);
            Alert.alert(`Time's up!`) 
            setRemainingTime(remainingTimeProp)
            setTimerState('Start')
        }
        return () => clearInterval(intervalId);
    }, [isRunning, remainingTime,]);
    useEffect(() => { setRemainingTime(remainingTimeProp); }, [remainingTimeProp])
    const handleStartStop = () => {
        setTimerState(isRunning ? 'Resume' : 'Pause')
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const handleReset = () => {
        setRemainingTime(remainingTimeProp);
        setTimerState('Start')
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const [timerState, setTimerState] = useState('Start')
    return (
        <>
            <View style={styles.counterFooter}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                    <Button
                        title={`Cancel`}
                        callBack={timerState == 'Start' ? null : handleReset}
                        titleStyle={styles.confirmStyle(timerState !== 'Start' ? false : true, null, RFPercentage(2))}
                        customStyle={[styles.plusIcon, { flex: 0, }]} />
                    <Button
                        title={formatTime(remainingTime)}
                        titleStyle={styles.confirmStyle(false, Colors.white, RFPercentage(2))}
                        customStyle={[styles.plusIcon, { flex: 0, marginHorizontal: RFPercentage(3) }]} />
                    <Button
                        title={timerState}
                        callBack={handleStartStop}
                        titleStyle={styles.confirmStyle(false, null, RFPercentage(2))}
                        customStyle={[styles.plusIcon, { flex: 0, }]} />
                </View>
                <View style={{ flex: 1 }}>

                    <Button
                        callBack={timerState == 'Pause' ? null : callBack}
                        title={`Set Time`}
                        titleStyle={styles.confirmStyle(timerState == 'Pause' ? true : false, null, RFPercentage(2))}
                        customStyle={[styles.plusIcon, { flex: 0, marginVertical: RFPercentage(1), }]} />
                </View>
            </View>
        </>
    )
}