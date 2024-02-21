import { Controller, useFormContext } from 'react-hook-form';
import { Form } from '@/common/components';
import { Input } from '@/common/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select';
import { countries } from '@/common/constants';
import { Inputs } from '../../schema';

export default function CheckoutForm() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div className="flex flex-col gap-9 flex-1">
      <h3 className="font-semibold text-4xl">Billing details</h3>

      <div className="flex gap-9 [&>div]:flex-1">
        <Form.Field>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Input id="firstName" {...register('firstName')} />
          {errors.firstName && (
            <Form.Error>{errors.firstName.message}</Form.Error>
          )}
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Input id="lastName" {...register('lastName')} />
          {errors.lastName && (
            <Form.Error>{errors.lastName.message}</Form.Error>
          )}
        </Form.Field>
      </div>

      <Form.Field>
        <Form.Label htmlFor="companyName">Company Name (Optional)</Form.Label>
        <Input id="companyName" {...register('companyName')} />
        {errors.companyName && (
          <Form.Error>{errors.companyName.message}</Form.Error>
        )}
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="countryOrRegion">Country / Region</Form.Label>
        <Controller
          name="countryOrRegion"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select onValueChange={onChange} defaultValue={value}>
              <SelectTrigger id="countryOrRegion">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map(({ code, name }) => (
                  <SelectItem key={code} value={code}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {errors.countryOrRegion && (
          <Form.Error>{errors.countryOrRegion.message}</Form.Error>
        )}
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="street">Street address</Form.Label>
        <Input id="street" {...register('street')} />
        {errors.street && <Form.Error>{errors.street.message}</Form.Error>}
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="city">Town / City</Form.Label>
        <Input id="city" {...register('city')} />
        {errors.city && <Form.Error>{errors.city.message}</Form.Error>}
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="province">Province</Form.Label>
        <Input id="province" {...register('province')} />
        {errors.province && <Form.Error>{errors.province.message}</Form.Error>}
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="phone">Phone</Form.Label>
        <Input id="phone" {...register('phone')} />
        {errors.phone && <Form.Error>{errors.phone.message}</Form.Error>}
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && <Form.Error>{errors.email.message}</Form.Error>}
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="additionalInfo">Additional information</Form.Label>
        <Input id="additionalInfo" {...register('additionalInfo')} />
        {errors.additionalInfo && (
          <Form.Error>{errors.additionalInfo.message}</Form.Error>
        )}
      </Form.Field>
    </div>
  );
}
