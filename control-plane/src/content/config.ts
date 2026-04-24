import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: z.enum(['in-progress', 'complete', 'planned']),
    summary: z.string(),
    tech: z.array(z.string()).optional(),
    repoUrl: z.string().url().optional(),
    pcpUrl: z.string().url().optional(),
  }),
});

const ledgerCollection = defineCollection({
  type: 'data',
  schema: z.object({
    timestamp: z.string(),
    action: z.enum(['deploy-azure', 'teardown-azure', 'deploy-local', 'eval-run', 'red-team-run']),
    status: z.enum(['success', 'failure', 'cancelled', 'skipped']),
    actor: z.string(),
    sha: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  ledger: ledgerCollection,
};
