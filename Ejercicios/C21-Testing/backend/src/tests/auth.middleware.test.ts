
import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware";

describe("Middleware de autenticación y autorización", () => {
  it("Debe rechazar una petición sin token con 401", () => {
    const req = {
      headers: {},
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn() as NextFunction;

    authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: "Falta el token",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("Debe rechazar a un CLIENTE que intenta acceder como ADMIN", () => {
    const req = {
      usuario: {
        id: 1,
        rol: "CLIENTE",
      },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn() as NextFunction;

    authorize("ADMIN")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      error: "No tenés permiso para esta operación",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("Debe permitir el acceso a un usuario ADMIN", () => {
    const req = {
      usuario: {
        id: 1,
        rol: "ADMIN",
      },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn() as NextFunction;

    authorize("ADMIN")(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(res.status).not.toHaveBeenCalled();
  });
});
