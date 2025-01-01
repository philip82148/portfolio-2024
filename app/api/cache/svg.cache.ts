export class SvgCache {
  constructor(private env: Env) {}

  async get(name: string): Promise<string | null> {
    const data = await this.env.SVGS.get(name);
    if (!data) return null;

    const { content } = JSON.parse(data) as { content: string; updatedAt: string };
    return content;
  }

  async getUpdatedAt(name: string): Promise<Date | null> {
    const data = await this.env.SVGS.get(name);
    if (!data) return null;

    const { updatedAt } = JSON.parse(data) as { content: unknown; updatedAt: string };
    return new Date(updatedAt);
  }

  async update(name: string, content: string): Promise<void> {
    await this.env.SVGS.put(name, JSON.stringify({ content, updatedAt: new Date().toISOString() }));
  }
}
