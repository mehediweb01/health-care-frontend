"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/auth.hook";
import { loginSchema } from "@/validations";
import { useForm } from "@tanstack/react-form";
import { cn } from "cn";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isPending } = useLogin();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };

      mutate(loginData, {
        onSuccess: (res) => {
          console.log(res);
        },
        onError: (err) => {
          console.log(err);
        },
      });
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field name="email">
                {(filed) => {
                  const isInvalid =
                    filed.state.meta.isTouched && !filed.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={filed.name}>Email</FieldLabel>
                      <Input
                        id={filed.name}
                        type="email"
                        name={filed.name}
                        onChange={(e) => filed.handleChange(e.target.value)}
                        onBlur={filed.handleBlur}
                        autoComplete="off"
                        value={filed.state.value}
                        aria-invalid={isInvalid}
                      />
                      {isInvalid && (
                        <FieldError errors={filed.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
              <form.Field name="password">
                {(filed) => {
                  const isInvalid =
                    filed.state.meta.isTouched && !filed.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={filed.name}>Password</FieldLabel>
                      <div className="relative">
                        <Input
                          id={filed.name}
                          type={showPassword ? "text" : "password"}
                          name={filed.name}
                          onChange={(e) => filed.handleChange(e.target.value)}
                          onBlur={filed.handleBlur}
                          autoComplete="off"
                          value={filed.state.value}
                          aria-invalid={isInvalid}
                          className="pr-8"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                        >
                          {showPassword ? (
                            <EyeClosed className="size-5" />
                          ) : (
                            <Eye className="size-5" />
                          )}
                        </button>
                      </div>

                      {isInvalid && (
                        <FieldError errors={filed.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
