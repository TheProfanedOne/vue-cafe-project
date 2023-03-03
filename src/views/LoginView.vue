<script setup lang="ts">
    import { ref, inject } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { userKey, type UserInject } from '@/composables/keys';
    import bcrypt from 'bcryptjs';
    import uds from '@/service/UsersDataService';
    import type { User } from '@/service/UsersDataService';
    import useTitle from '@/composables/title';

    useTitle('Login/Register');

    const { currUser, setUser } = inject(userKey) as UserInject;
    const route = useRoute();
    const router = useRouter();

    if (currUser.value !== '') {
        router.push(`'/${route.params.from}'`);
    }

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const pass = ref('');

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    async function handleLogin() {
        if (!emailRegex.test(email.value)) {
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
            if (typeof res.data !== 'string') {
                const hash = (res.data.pass as string).replace('$2y$', '$2a$');
                const corPass = await bcrypt.compare(user.pass, hash);
                const corName =
                    user.first_name === res.data.first_name &&
                    user.last_name === res.data.last_name;

                if (corPass && corName) {
                    setUser(user.email);
                    router.push(`/${route.params.rte}`);
                } else if (!corPass && !corName) {
                    alert('Incorrect name and password.');
                    firstName.value = '';
                    lastName.value = '';
                    pass.value = '';
                } else if (!corPass) {
                    alert('Incorrect password.');
                    pass.value = '';
                } else {
                    alert('Incorrect name.');
                    firstName.value = '';
                    lastName.value = '';
                }
            } else if (res.data.includes('Register')) {
                if (confirm(res.data)) {
                    const salt = await bcrypt.genSalt(10);
                    const hash = await bcrypt.hash(user.pass, salt);
                    user.pass = hash.replace('$2a$', '$2y$');
                    const res2 = await uds.createUser(user);
                    if ((res2.data as string).includes('Success')) {
                        setUser(user.email);
                        router.push(`/${route.params.rte}`);
                    } else {
                        alert(res2.data);
                    }
                } else {
                    email.value = '';
                }
            } else {
                alert(res.data);
            }
        }
    }
</script>

<template>
    <form @submit.prevent="handleLogin">
        <fieldset>
            <legend>Login/Register</legend>

            <input type="text" placeholder="First Name" required v-model="firstName" />
            &nbsp;
            <input type="text" placeholder="Last Name" required v-model="lastName" />

            <br />
            <br />

            <section>
                <label for="mail">Email:</label>
                <input type="email" id="mail" required v-model="email" />
            </section>

            <br />

            <section>
                <label for="pass">Password:</label>
                <input type="password" id="pass" required v-model="pass" />
            </section>

            <br />

            <section class="button-box">
                <button>Submit</button>
            </section>
        </fieldset>
    </form>
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
