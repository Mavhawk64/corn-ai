Testing functionalities
-----------------------

To test the functionalities, I can try ``corn_ai.get_data()`` function:

.. py:function:: corn_ai.get_data(data_dir)

    Return a np.array of objects filled with RGB values, paired with a classification value (0 or 1).

    :param data_dir: Directory where data is stored.
    :type data_dir: str
    :return: Array of RGB values and classification value
    :rtype: np.array