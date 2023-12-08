import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm() {

    function submit() {

    }

    return (
    <form onSubmit={submit} className={styles.form}>
        <Input 
            type="text"
            text="Nome do serviço"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
        />
    </form>
    )
}

export default ServiceForm