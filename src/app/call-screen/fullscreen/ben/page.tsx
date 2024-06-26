'use client';
import { BigParticipantTile, BottomPanel } from 'app/call-screen/page';
import styles from '../subpages.module.scss';
import { useRouter } from 'next/navigation';
import { useInput } from 'compo/global/context/InputContext';
import { useEffect } from 'react';

export default function BenFullScreen() {

    const router = useRouter();
    const {addVoiceRoute, removeVoiceRoute} = useInput();

    const handleBackToCallScreen = () => {
        router.push('/call-screen');
    }

    const handleButtonClick = () => {
        router.push('/categories-page');
    };

    const handleEndCall = () => {
        router.push('/end-page');
    }

    useEffect(() => {
        addVoiceRoute('recipes', 'Okay, I have selected Recipes.', handleButtonClick, {
            visual: 'View Recipes'
        });
        addVoiceRoute('grid view', 'Okay, I have switched to grid view.', handleBackToCallScreen, {
            visual: 'Grid View'
        });
        addVoiceRoute('end call', 'Okay, I have ended the call.', handleEndCall, {
            visual: 'End Call'
        });

        return () => {
            removeVoiceRoute('recipes');
            removeVoiceRoute('grid view');
            removeVoiceRoute('end call');
        }
    }, []);

    return (
        <div className={styles.container}>
            <button className={styles.gridViewButton} onClick={handleBackToCallScreen}>Grid View</button>
            <BigParticipantTile name="Ben" image="/participants/ben.png"/>
            <BottomPanel/>
        </div>
    )
}