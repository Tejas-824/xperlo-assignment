import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import AuthSplitLayout from '../components/auth/AuthSplitLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function Login() {
  const [form, setForm] = useState({ identifier: '', password: '', code: '' });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Login with', form);
  }

  return (
    <>
      <Seo title="Login" description="Sign in to your airoame account to manage bookings." path="/login" />
      <AuthSplitLayout>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            id="identifier"
            label="Username or E-mail"
            type="text"
            placeholder="demo@email.com"
            required
            value={form.identifier}
            onChange={update('identifier')}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••••••••"
            required
            value={form.password}
            onChange={update('password')}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-brand-muted">
              <input type="checkbox" className="h-4 w-4 rounded border-brand-border bg-brand-input accent-brand-pink" />
              Remember me
            </label>
            <Link to="/reset-password" className="font-medium text-brand-muted hover:text-white">
              Forgot password?
            </Link>
          </div>

          <div
            aria-hidden="true"
            className="flex h-14 select-none items-center justify-center rounded-lg bg-blue-950 font-mono text-xl tracking-[0.5em] text-blue-300"
          >
            264155
          </div>
          <Input
            id="code"
            label=""
            type="text"
            placeholder="Enter Code"
            required
            value={form.code}
            onChange={update('code')}
          />

          <Button type="submit" size="lg">
            Login
          </Button>

          <p className="text-center text-sm text-brand-muted">
            New here?{' '}
            <Link to="/register" className="font-semibold text-white hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </AuthSplitLayout>
    </>
  );
}
