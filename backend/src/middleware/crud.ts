/**
 * @summary
 * CRUD controller middleware
 * Provides base functionality for CRUD operations with validation
 *
 * @module middleware/crud
 */

import { Request } from 'express';
import { z } from 'zod';

export interface SecurityRule {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

export interface ValidatedRequest {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: any;
}

export class CrudController {
  private rules: SecurityRule[];

  constructor(rules: SecurityRule[]) {
    this.rules = rules;
  }

  async create(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validate(req, schema, 'CREATE');
  }

  async read(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validate(req, schema, 'READ');
  }

  async update(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validate(req, schema, 'UPDATE');
  }

  async delete(req: Request, schema: z.ZodSchema): Promise<[ValidatedRequest | undefined, any]> {
    return this.validate(req, schema, 'DELETE');
  }

  private async validate(
    req: Request,
    schema: z.ZodSchema,
    permission: string
  ): Promise<[ValidatedRequest | undefined, any]> {
    try {
      const params = {
        ...req.params,
        ...req.query,
        ...req.body,
      };

      const validated = await schema.parseAsync(params);

      return [
        {
          credential: {
            idAccount: 1,
            idUser: 1,
          },
          params: validated,
        },
        undefined,
      ];
    } catch (error: any) {
      return [
        undefined,
        {
          statusCode: 400,
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details: error.errors,
        },
      ];
    }
  }
}

export const successResponse = (data: any) => ({
  success: true,
  data,
  timestamp: new Date().toISOString(),
});

export const errorResponse = (message: string, code?: string) => ({
  success: false,
  error: {
    code: code || 'ERROR',
    message,
  },
  timestamp: new Date().toISOString(),
});
