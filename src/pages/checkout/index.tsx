import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Overview, PreFooter, Section } from '@/common/components';
import schema, { Inputs } from './schema';
import { CheckoutForm, Payments } from './components';

export default function Checkout() {
  const methods = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      paymentMethod: 'bankTransfer',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <Overview page="checkout" />

      <Section className="py-24">
        <FormProvider {...methods}>
          <Form
            className="lg:flex-row xl:gap-32"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <CheckoutForm />

            <Payments />
          </Form>
        </FormProvider>
      </Section>

      <PreFooter />
    </div>
  );
}
