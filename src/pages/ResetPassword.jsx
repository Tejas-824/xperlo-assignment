import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import AuthCenteredLayout from '../components/auth/AuthCenteredLayout';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

const METHODS = [
  { label: 'E-Mail Address', value: 'email' },
  { label: 'Mobile Number', value: 'mobile' },
];

export default function ResetPassword() {
  const [method, setMethod] = useState('email');
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    setSent(true);
  }

  return (
    <>
      <Seo title="Reset Password" description="Recover access to your airoame account." path="/reset-password" />
      <AuthCenteredLayout>
        <h1 className="text-center text-2xl font-bold">Reset Password</h1>

        {sent ? (
          <p className="mt-6 text-center text-sm text-brand-muted">
            A password code has been sent — check your {method === 'email' ? 'inbox' : 'phone'} for the next steps.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <Select
              id="method"
              label="Select One"
              options={METHODS}
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
                setValue('');
              }}
            />

            {method === 'email' ? (
              <Input
                id="email"
                label="E-Mail Address"
                type="email"
                placeholder="demo@email.com"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            ) : (
              <Input
                id="mobile"
                label="Mobile Number"
                type="tel"
                placeholder="9994585226"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}

            <Button type="submit" size="lg" className="mt-2">
              Send Password Code
            </Button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-brand-muted">
          Remembered your password?{' '}
          <Link to="/login" className="font-semibold text-white hover:underline">
            Sign In
          </Link>
        </p>
      </AuthCenteredLayout>
    </>
  );
}
