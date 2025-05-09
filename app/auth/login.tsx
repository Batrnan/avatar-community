import EmailInput from '@/components/EmailInput';
import FixedBottonCTA from '@/components/FixedBottonCTA';
import PasswordInput from '@/components/PasswordInput';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

type FormValues = {
  email: string;
  password: string;
};
export default function Logincreen() {
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log('formV', formValues);
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>
      <FixedBottonCTA
        label="로그인하기"
        onPress={loginForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
