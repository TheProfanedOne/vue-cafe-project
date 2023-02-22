<script setup lang="ts">
    import { ref } from 'vue';
    import bcrypt from 'bcryptjs';
    import uds from '@/service/UsersDataService';
    import type { User } from '@/service/UsersDataService';
    import useTitle from '@/composables/title';

    useTitle('Login/Register');

    defineProps<{
        currentUser: string;
    }>();
    const emit = defineEmits<{
        (e: 'update:currentUser', newValue: string): void;
    }>();

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const pass = ref('');

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    async function handleLogin() {
        if (!firstName.value || !lastName.value || !email.value || !pass.value) {
            alert('Please fill out all fields.');
        } else if (!emailRegex.test(email.value)) {
            alert('Please enter a valid email address.');
            email.value = '';
        } else if (!passRegex.test(pass.value)) {
            const msg1 = 'Please enter a password of at least 8 characters,';
            const msg2 = 'at least one uppercase letter, one lowercase letter,';
            const msg3 = 'one number and one special character ( @$!%*?& ).';
            alert(`${msg1}\n${msg2}\n${msg3}`);
            pass.value = '';
        } else {
            const user: User = {
                first_name: firstName.value,
                last_name: lastName.value,
                email: email.value,
                pass: pass.value,
            };

            const res = await uds.userLookup(user.email);

            if (res.status === 200) {
                if (res.data === 'User not present.') {
                    if (confirm(`${res.data} Register "${user.email}"?`)) {
                        const hash = await bcrypt.hash(user.pass, 10);
                        user.pass = hash.replace('$2a$', '$2y$');
                        const inner_res = await uds.createUser(user);
                        if (inner_res.status === 201) {
                            emit('update:currentUser', user.email);
                        } else {
                            alert(inner_res.data);
                        }
                    } else {
                        email.value = '';
                    }
                } else {
                    const hash = (res.data.pass as string).replace('$2y$', '$2a$');
                    const correctPass = (await bcrypt.compare(user.pass, hash));
                    const correctName =
                        user.first_name === res.data.first_name &&
                        user.last_name === res.data.last_name;
                    
                    if (correctPass && correctName) {
                        emit('update:currentUser', user.email);
                    } else if (!(correctPass || correctName)) {
                        alert('Incorrect name and password.');
                        firstName.value = '';
                        lastName.value = '';
                        pass.value = '';
                    } else if (!correctPass) {
                        alert('Incorrect password.');
                        pass.value = '';
                    } else {
                        alert('Incorrect name.');
                        firstName.value = '';
                        lastName.value = '';
                    }
                }
            } else {
                alert(res.data);
            }
        }
    }
</script>

<template>
    <fieldset>
        <legend>Log In/Register</legend>

        <input type="text" v-model="firstName" placeholder="First Name" />
        &nbsp;
        <input type="text" v-model="lastName" placeholder="Last Name" />

        <br />
        <br />

        <section>
            <label for="mail">Email: </label>
            <input type="email" id="mail" v-model="email" />
        </section>

        <br />

        <section>
            <label for="pass">Password: </label>
            <input type="password" id="pass" v-model="pass" />
        </section>

        <br />

        <section class="button-box">
            <button type="button" @click="handleLogin">Log In/Register</button>
        </section>
    </fieldset>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/main.scss';

    fieldset {
        position: relative;
    }

    label,
    legend {
        color: $aw;
    }

    legend {
        width: 100%;
        text-align: center;
        font-size: 1.5em;
    }

    section {
        width: 100%;
        @include flex(row);
        justify-content: space-between;

        &.button-box {
            justify-content: center;
        }
    }
</style>
