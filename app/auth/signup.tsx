import EmailInput from '@/components/EmailInput';
import FixedBottonCTA from '@/components/FixedBottonCTA';
import PasswordConfirmInput from '@/components/PasswordConfirmInput';
import PasswordInput from '@/components/PasswordInput';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};
export default function SignupScreen() {
  const singupForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log('formV', formValues);
  };

  return (
    <FormProvider {...singupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput submitBehavior="submit" />
        <PasswordConfirmInput />
      </View>
      <FixedBottonCTA
        label="회원가입하기"
        onPress={singupForm.handleSubmit(onSubmit)}
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
