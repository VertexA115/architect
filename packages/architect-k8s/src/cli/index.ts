import { App } from '@vertex115/architect-core/src';
import * as commander from 'commander';

export class K8sApp extends App {
  protected build(): commander.Command {
    const program = super.build();
    // const k8s = program.command('k8s')
    //   .description('Kubernetes related commands');

    //k8s.command('crds');

    return program;
  };
};
