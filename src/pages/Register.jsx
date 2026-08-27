import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import AuthSplitLayout from '../components/auth/AuthSplitLayout';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

const COUNTRIES = ['Country', 'United States', 'United Kingdom', 'India', 'Canada', 'Australia'];

const initialForm = {
  firstName: '',
  lastName: '',
  country: COUNTRIES[0],
  mobile: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Register() {
  const [form, setForm] = useState(initialForm);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Register with', form);
  }

  return (
    <>
      <Seo title="Create an Account" description="Register for a free airoame account." path="/register" />
      <AuthSplitLayout formClassName="max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input id="firstName" label="First Name" placeholder="John" required value={form.firstName} onChange={update('firstName')} />
            <Input id="lastName" label="Last Name" placeholder="Doe" required value={form.lastName} onChange={update('lastName')} />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Select id="country" label="Country" options={COUNTRIES} value={form.country} onChange={update('country')} />
            <div>
              <label htmlFor="mobile" className="mb-2 block text-sm font-medium text-white">
                Mobile Number
              </label>
              <div className="flex overflow-hidden rounded-lg border border-brand-border bg-brand-input">
                <span className="flex items-center px-3 text-sm text-brand-muted">+91</span>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="9994585226"
                  required
                  value={form.mobile}
                  onChange={update('mobile')}
                  className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder-brand-muted outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input id="username" label="Username" placeholder="Username" required value={form.username} onChange={update('username')} />
            <Input id="email" label="E-Mail Address" type="email" placeholder="E-mail Address" required value={form.email} onChange={update('email')} />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input id="password" label="Password" type="password" placeholder="Password" required value={form.password} onChange={update('password')} />
            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              required
              value={form.confirmPassword}
              onChange={update('confirmPassword')}
            />
          </div>

          <Button type="submit" size="lg" className="mt-2">
            Register
          </Button>

          <p className="text-center text-sm text-brand-muted">
            Already have an Account?{' '}
            <Link to="/login" className="font-semibold text-white hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </AuthSplitLayout>
    </>
  );
}
