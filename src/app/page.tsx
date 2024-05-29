'use client'
import Image from "next/image";
import styles from "./page.module.scss";

import { useEffect, useRef, useState } from 'react';
import { useInput } from 'compo/global/context/InputContext';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const {addVoiceRoute, removeVoiceRoute} = useInput();

    const handleContinueClick = () => {
      router.push("/contacts-page");
    };

    const continueButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(()=>{

      const pressContinue = () => {
        if(continueButtonRef.current){
          continueButtonRef.current.click();
        }
      }

      addVoiceRoute('continue', ['Okay, I have pressed Continue for you.'], pressContinue, {
        visual: 'Continue'
      });

      return () => {
        removeVoiceRoute('continue');
      }

    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.UCookHomePage}>

              <div className={styles.WelcomePopUp}>
                <p>Welcome to the U-Cook Virtual Cooking Assistant!</p>
                <p>This application strives to help you learn to cook with friends and family while using voice recognition to
                  effortlessly browse through different recipes and cookbooks!
                </p>
                <hr/>
                <p>To use the voice assistant, say &quot;Hi Cook&quot;, &quot;Hey Cook&quot; or &quot;Hello Cook&quot; and then your request.</p>
                <p>To list all available commands for the current page, say &quot;Hi Cook, Help&quot; to the voice assistant!</p>
                <p>To check that your voice is being picked up, the microphone icon should pulse green when it detects audio.</p>
                <hr/>
                <p>To start cooking, press continue or say &quot;Hi Cook, Press Continue&quot;!</p>

                <button ref={continueButtonRef} onClick={handleContinueClick} data-continue-button><strong>Continue</strong></button>
              </div>
             
            </div>
        </main>
    );
}