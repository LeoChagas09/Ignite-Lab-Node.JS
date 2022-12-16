import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['darling-filly-12383-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZGFybGluZy1maWxseS0xMjM4MyTYl1n2poxvKW-PV0daehaPc9BkL30jYA1FNVk',
          password:
            'YQ9aniNGwqyK9TDdaU8w8Zgr0BWcGqfQ6prYggYeapulh59nlNUo0Jb8ifJXfEYxXe8ArQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
