import { Commit, Perspective, Context } from '../types';
import { LinkResolver } from '../../services/resolver';

export interface UprtclService extends LinkResolver {
  /** Getters */

  getRootContext(): Promise<Context>;
  
  getContext(contextId: string): Promise<Context>;
  getContextId(context: Context): Promise<string>;

  getPerspective(perspectiveId: string): Promise<Perspective>;
  getCommit(commitId: string): Promise<Commit>;

  getContextPerspectives(contextId: string): Promise<Perspective[]>;

  /** Modifiers */

  // Contexts
  createContext(context: Context): Promise<string>;

  // Perspectives
  createPerspective(
    contextId: string,
    name: string,
    commitLink: string
  ): Promise<string>;
  createPerspectiveAndContent(
    context: Context,
    name: string,
    commit: Commit
  ): Promise<string>;

  // Commit
  createCommit(
    perspectiveId: string,
    message: string,
    contentAddress: string
  ): Promise<string>;
}