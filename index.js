

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'kibana_hide_exit_full_screen',
    uiExports: {
      hacks: [
        'plugins/kibana_hide_exit_full_screen/hack'
      ],
      uiSettingDefaults: {
        'hide-exit-full-screen:enabled': {
          value: true,
          description: 'Hide exit full screen button'
        }
      },
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
