import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Overview, PreFooter, Section } from '@/common/components';
import { Input } from '@/common/components/ui/input';
import schema, { Inputs } from './schema';
import { Button } from '@/common/components/ui/button';
import { Textarea } from '@/common/components/ui/textarea';
import { ClockIcon, LocationIcon, PhoneIcon } from '@/assets/icons';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <Overview page="contact" />

      <Section>
        <div className="w-fit mx-auto text-center">
          <h3 className="font-semibold text-4xl">Get In Touch With Us</h3>
          <p className="max-w-[640px] mt-2 text-text-t">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-24">
          <div className="w-full lg:w-[420px] sm:px-14">
            <div className="flex gap-[30px]">
              <LocationIcon className="flex-shrink-0" />
              <div>
                <h4 className="font-medium text-xl">Address</h4>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex gap-[30px] mt-10">
              <PhoneIcon className="flex-shrink-0" />
              <div>
                <h4 className="font-medium text-xl">Phone</h4>
                <p>Hotline: +(84) 456-6789</p>
                <p>Mobile: +(84) 546-6789</p>
              </div>
            </div>

            <div className="flex gap-[30px] mt-10">
              <ClockIcon className="flex-shrink-0" />
              <div>
                <h4 className="font-medium text-xl">Working Time</h4>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <Form
            className="flex-grow sm:px-14"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Field>
              <Form.Label htmlFor="name">Your Name</Form.Label>
              <Input id="name" placeholder="John" {...register('name')} />
              {errors.name && <Form.Error>{errors.name.message}</Form.Error>}
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Input
                id="email"
                placeholder="john@gmail.com"
                {...register('email')}
              />
              {errors.email && <Form.Error>{errors.email.message}</Form.Error>}
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="subject">Subject</Form.Label>
              <Input
                id="subject"
                placeholder="This is an optional"
                {...register('subject')}
              />
              {errors.subject && (
                <Form.Error>{errors.subject.message}</Form.Error>
              )}
            </Form.Field>

            <Form.Field>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Textarea
                id="message"
                placeholder="Hi! i'd like to ask about"
                {...register('message')}
              />
              {errors.message && (
                <Form.Error>{errors.message.message}</Form.Error>
              )}
            </Form.Field>

            <Button type="submit" className="w-60">
              Submit
            </Button>
          </Form>
        </div>
      </Section>

      <PreFooter />
    </div>
  );
}
