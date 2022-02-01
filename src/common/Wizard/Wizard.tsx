import React from 'react';
import {WizardStyled} from './Wizard.styled';


type WizardProps = {
    items: string[],
    active: number
}

const Wizard = ({items, active}: WizardProps) => {

    return <WizardStyled.WizardContainer>
        <WizardStyled.WizardItems>
            {
                items.map((e, i) => {
                    return <WizardStyled.WizardItem key={e} $active={active === i}>
                        <span className={'step-number'}>{i+1}</span>
                        <span className={'step-name'}>{e}</span>
                    </WizardStyled.WizardItem>
                })
            }
        </WizardStyled.WizardItems>
    </WizardStyled.WizardContainer>
}

export default Wizard
